import { PUBLIC_HACKER_APP_URL, PUBLIC_EMAIL } from '$env/static/public';

export const SUCCESS_MESSAGE = "Thanks for applying! You'll hear back from us soon :)";

function checkTextAreaWordLength(textarea: HTMLTextAreaElement) {
	if (textarea.value == null) {
		return;
	}
	const words = textarea.value.trim().split(/\s+/);
	if (words.length > 150) {
		textarea.value = words.slice(0, 150).join(" ");
	}
}

function updateTextAreaHeight(textarea: HTMLTextAreaElement) {
	textarea.style.height = 'auto';
	textarea.style.height = textarea.scrollHeight + 'px';
}

export enum ApplicationType {
	Hacker,
	Mentor,
	Volunteer
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
	const validKeypress = e.key == 'Backspace' || e.key == 'Enter' || e.key == 'Delete' || !Number.isNaN(Number(e.key));
	if (!validKeypress) {
		e.preventDefault();
	}
}

function validateHackerApplication(form: HTMLFormElement) {
	// Ensure that for required questions, at least one checkbox is checked.
	const checkboxQuestions = form.getElementsByClassName('checkbox');
	for (let i = 0; i < checkboxQuestions.length; ++i) {
		const question = checkboxQuestions.item(i);
		if (question != null) {
			if (question.querySelectorAll('input[type=checkbox]:checked').length == 0) {
				let questionName: string = '';
				switch (i) {
					case 0:
						questionName = 'gender';
						break;
					case 1:
						questionName = 'preferred pronouns';
						break;
					case 2:
						questionName = 'ethnicity';
						break;
					case 3:
						questionName = "'How did you hear about us'";
						break;
				}

				(question as HTMLDivElement).style.borderColor = 'red';

				return {
					validated: false,
					message: `You have not filled out the ${questionName} question. Please answer the question and resubmit!`
				};
			}
		}
	}
	return { validated: true };
}

function validateForm(form: HTMLFormElement, formType: ApplicationType) {
	switch (formType) {
		case ApplicationType.Hacker:
			return validateHackerApplication(form);
		case ApplicationType.Mentor:
		case ApplicationType.Volunteer:
	}
	return { validated: false, message: 'Illegal' };
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
			if (val.length == 0) {
				return [key, ""];
			}
			
			return [key, JSON.stringify(val).replace('[', '').replaceAll('"', '').replaceAll(']', '')];
		})
	);
	// console.log(formJSON);
	form.reset();

	// Send form information to backend.
	const response = await fetch(PUBLIC_HACKER_APP_URL, {
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
