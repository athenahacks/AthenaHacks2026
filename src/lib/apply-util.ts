import {
	PUBLIC_HACKER_APP_URL,
	PUBLIC_MENTOR_APP_URL,
	PUBLIC_VOLUNTEER_APP_URL,
	PUBLIC_EMAIL
} from '$env/static/public';

export const SUCCESS_MESSAGE = "Thanks for applying! You'll hear back from us soon :)";

function checkTextAreaWordLength(textarea: HTMLTextAreaElement) {
	if (textarea.value == null) {
		return;
	}
	const words = textarea.value.trim().split(/\s+/);
	if (words.length > 150) {
		textarea.value = words.slice(0, 150).join(' ');
	}
}

function updateTextAreaHeight(textarea: HTMLTextAreaElement) {
	textarea.style.height = 'auto';
	textarea.style.height = textarea.scrollHeight + 'px';
}

export enum ApplicationType {
	Hacker,
	Mentor,
	Volunteer,
	Unknown
}

export function onKeyupTextArea(e: Event) {
	if (e.target != null) {
		checkTextAreaWordLength(e.target as HTMLTextAreaElement);
	}
}

export function onInputTextArea(e: Event) {
	if (e.target != null) {
		updateTextAreaHeight(e.target as HTMLTextAreaElement);
	}
}

export function verifyPositiveAndWholeNumber(e: KeyboardEvent) {
	const validKeypress =
		e.key == 'Backspace' || e.key == 'Enter' || e.key == 'Delete' || !Number.isNaN(Number(e.key));
	if (!validKeypress) {
		e.preventDefault();
	}
}

function validateRequiredCheckboxes(
	form: HTMLFormElement,
	requiredCheckboxQuestionNames: string[]
) {
	// Ensure that for required questions, at least one checkbox is checked.
	const checkboxQuestions = form.getElementsByClassName('checkbox');

	for (let i = 0; i < requiredCheckboxQuestionNames.length; ++i) {
		const question = checkboxQuestions.item(i);
		if (question != null && question.querySelectorAll('input[type=checkbox]:checked').length == 0) {
			const questionName = requiredCheckboxQuestionNames[i];
			(question as HTMLDivElement).style.borderColor = 'red';

			return {
				validated: false,
				message: `You have not filled out the ${questionName} question. Please answer the question and resubmit!`
			};
		}
	}

	return { validated: true };
}

function validateForm(form: HTMLFormElement, formType: ApplicationType) {
	switch (formType) {
		case ApplicationType.Hacker:
		case ApplicationType.Mentor:
			return validateRequiredCheckboxes(form, [
				'gender',
				'preferred pronouns',
				'ethnicity',
				"'How did you hear about us'"
			]);

		case ApplicationType.Volunteer:
			return validateRequiredCheckboxes(form, [
				'gender',
				'preferred pronouns',
				"'How did you hear about us'"
			]);
	}
	return { validated: false, message: 'Illegal' };
}

function formTypeToURL(formType: ApplicationType) {
	switch (formType) {
		case ApplicationType.Hacker:
			return PUBLIC_HACKER_APP_URL;
		case ApplicationType.Mentor:
			return PUBLIC_MENTOR_APP_URL;
		case ApplicationType.Volunteer:
			return PUBLIC_VOLUNTEER_APP_URL;
	}

	return '';
}

export async function handleSubmit(
	e: SubmitEvent,
	form: HTMLFormElement,
	formType: ApplicationType
) {
	const data = new FormData(form);
	let { validated, message } = validateForm(form, formType);
	if (!validated) {
		return {
			formSuccess: false,
			formMessage: message
		};
	}

	// Serialize form data.
	const formJSON = Object.fromEntries(
		Array.from(data.keys(), (key) => {
			const val = data.getAll(key);

			// Ensure that the value is always a string and not null or something similar.
			if (val.length == 0) {
				return [key, ''];
			}

			return [key, JSON.stringify(val).replace('[', '').replaceAll('"', '').replaceAll(']', '')];
		})
	);
	form.reset();

	// Send form information to backend.
	const response = await fetch(formTypeToURL(formType), {
		method: 'POST',
		headers: {
			'Content-Type': 'text/plain'
		},
		body: JSON.stringify(formJSON)
	});

	const result = await response.json();
	if (result.status !== 'success') {
		return {
			formSuccess: false,
			formMessage: `Failed to submit application. Please email ${PUBLIC_EMAIL} for assistance.`
		};
	}
	return {
		formSuccess: true
	};
}
