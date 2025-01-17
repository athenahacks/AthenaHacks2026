<script lang="ts">
	import {
		ApplicationType,
		onInputTextArea,
		onKeyupTextArea,
		handleSubmit,
		verifyPositiveAndWholeNumber
	} from '$lib/apply-util';
	import '$lib/scss/_globals.scss';
	import '$lib/scss/apply-common.scss';
	import Header from '$lib/components/Header.svelte';

	let form: HTMLFormElement;
	let errorBox: HTMLParagraphElement;

	let genderOtherChecked: boolean;
	let pronounsOtherChecked: boolean;
	let ethnicityOtherChecked: boolean;
	let hearAboutUsOtherChecked: boolean;

	async function handleSubmitWrapper(e: SubmitEvent) {
		const result = await handleSubmit(e, form, ApplicationType.Hacker);
		const formSuccess = result.formSuccess;
		const formMessage = result.formMessage ? result.formMessage : '';

		if (formSuccess) {
			errorBox.textContent = "Thanks for applying! You'll hear back from us soon :)";
			errorBox.style.color = 'black';
		} else {
			errorBox.textContent = formMessage;
			errorBox.style.color = 'red';
		}
	}
</script>

<svelte:head>
	<title>AthenaHacks 2025 Hacker Application</title>
</svelte:head>

<form method="POST" on:submit|preventDefault={handleSubmitWrapper} bind:this={form}>
	<div class="header">
		<img src="/images/shovel_owl.png" alt="Shovel Owl" />
		<Header>AthenaHacks 2025 Hacker Application</Header>
	</div>

	<p>
		<small
			>Thank you for your interest in AthenaHacks, Southern California's premier collegiate
			hackathon for marginalized genders, hosted annually at the University of Southern California
			(USC)!
			<br /><br />
			Our event will be held in-person at USC on March 1-2, 2025. Please note there will not be a virtual
			or hybrid option this year.
			<br /><br />
			We will be accepting applications on a rolling basis, so keep an eye out for an email from us once
			you apply!</small
		>
	</p>

	<div class="form_question">
		<label for="email">
			<p>
				Educational Email Address <em class="required">*</em><br /><small
					>Ex: tommytrojan@usc.edu</small
				>
			</p>
			<input name="email" id="email" type="email" required />
		</label>
	</div>

	<div class="form_question">
		<label for="first_name">
			<p>First Name <em class="required">*</em></p>
			<input name="first_name" id="first_name" type="text" required />
		</label>
	</div>

	<div class="form_question">
		<label for="last_name">
			<p>Last Name <em class="required">*</em></p>
			<input name="last_name" id="last_name" type="text" required />
		</label>
	</div>

	<div class="form_question">
		<label for="pref_first_name">
			<p>Preferred First Name <em class="required">*</em></p>
			<input name="pref_first_name" id="pref_first_name" type="text" required />
		</label>
	</div>

	<div class="form_question">
		<label for="birthday">
			<p>Date of Birth <em class="required">*</em></p>
			<input name="birthday" id="birthday" type="date" required />
		</label>
	</div>

	<div class="form_question radio">
		<p>Will you be 18 or older by March 2025? <em class="required">*</em></p>
		<label for="age_agreement_yes">
			<input name="age_agreement" id="age_agreement_yes" type="radio" value="Yes" required />
			<span>Yes</span>
		</label>
		<label for="age_agreement_no">
			<input name="age_agreement" id="age_agreement_no" type="radio" value="No" required />
			<span>No</span>
		</label>
	</div>

	<div class="form_question">
		<label for="shirt_size">
			<p>What is your shirt size? <em class="required">*</em></p>
			<select name="shirt_size" id="shirt_size">
				<option value="XS">XS</option>
				<option value="S">S</option>
				<option value="M">M</option>
				<option value="L">L</option>
				<option value="XL">XL</option>
				<option value="XXL">XXL</option>
			</select>
		</label>
	</div>

	<div class="form_question">
		<label for="phone_number">
			<p>Phone Number <em class="required">*</em></p>
			<input name="phone_number" id="phone_number" type="tel" required />
		</label>
	</div>

	<div class="form_question">
		<label for="school_name">
			<p>
				What university do you currently attend? <em class="required">*</em><br /><small
					>Please do not abbreviate! For example, type "University of Southern California" rather
					than USC.</small
				>
			</p>
			<input name="school_name" id="school_name" type="text" required />
		</label>
	</div>

	<div class="form_question radio">
		<p>Grade Level <em class="required">*</em></p>
		<p>Note: You must be a university student and have a .edu email to attend!</p>
		<label for="grade_level_freshman">
			<input name="grade_level" id="grade_level_freshman" type="radio" value="Freshman" required />
			<span>Freshman</span>
		</label>
		<label for="grade_level_sophomore">
			<input
				name="grade_level"
				id="grade_level_sophomore"
				type="radio"
				value="Sophomore"
				required
			/>
			<span>Sophomore</span>
		</label>
		<label for="grade_level_junior">
			<input name="grade_level" id="grade_level_junior" type="radio" value="Junior" required />
			<span>Junior</span>
		</label>
		<label for="grade_level_senior">
			<input name="grade_level" id="grade_level_senior" type="radio" value="Senior" required />
			<span>Senior</span>
		</label>
		<label for="grade_level_graduate">
			<input name="grade_level" id="grade_level_graduate" type="radio" value="Graduate" required />
			<span>Graduate</span>
		</label>
	</div>

	<div class="form_question">
		<label for="majors">
			<p>Major(s) of Study <em class="required">*</em></p>
			<input name="majors" id="majors" type="text" required />
		</label>
	</div>

	<div class="form_question">
		<label for="minors">
			<p>Minor(s) of Study</p>
			<input name="minors" id="minors" type="text" />
		</label>
	</div>

	<div class="form_question checkbox">
		<p>Gender <em class="required">*</em></p>
		<label for="gender_male">
			<input name="gender" id="gender_male" type="checkbox" value="Male" />
			<span>Male</span>
		</label>
		<label for="gender_female">
			<input name="gender" id="gender_female" type="checkbox" value="Female" />
			<span>Female</span>
		</label>
		<label for="gender_nonbinary">
			<input name="gender" id="gender_nonbinary" type="checkbox" value="Non-Binary" />
			<span>Non-Binary</span>
		</label>
		<label for="gender_genderqueer">
			<input
				name="gender"
				id="gender_genderqueer"
				type="checkbox"
				value="Genderqueer/Gender Non-conforming"
			/>
			<span>Genderqueer/Gender Non-conforming</span>
		</label>
		<label for="gender_transgender">
			<input name="gender" id="gender_transgender" type="checkbox" value="Transgender" />
			<span>Transgender</span>
		</label>
		<label for="gender_prefernot">
			<input name="gender" id="gender_prefernot" type="checkbox" value="Prefer not to answer" />
			<span>Prefer not to answer</span>
		</label>
		<label for="gender_other">
			<input
				name="gender"
				id="gender_other"
				type="checkbox"
				value="Other"
				bind:checked={genderOtherChecked}
			/>
			<span>Other</span>
			{#if genderOtherChecked}
				<input type="text" name="gender" id="gender_other_text" />
			{/if}
		</label>
	</div>

	<div class="form_question checkbox">
		<p>What are your preferred pronouns? <em class="required">*</em></p>
		<label for="pronouns_she">
			<input name="pronouns" id="pronouns_she" type="checkbox" value="she/her" />
			<span>she/her</span>
		</label>
		<label for="pronouns_him">
			<input name="pronouns" id="pronouns_him" type="checkbox" value="he/him" />
			<span>he/him</span>
		</label>
		<label for="pronouns_they">
			<input name="pronouns" id="pronouns_they" type="checkbox" value="they/them" />
			<span>they/them</span>
		</label>
		<label for="pronouns_ze">
			<input name="pronouns" id="pronouns_ze" type="checkbox" value="ze/zem/zir" />
			<span>ze/zem/zir</span>
		</label>
		<label for="pronouns_xe">
			<input name="pronouns" id="pronouns_xe" type="checkbox" value="xe/xem/xyr" />
			<span>xe/xem/xyr</span>
		</label>
		<label for="pronouns_other">
			<input
				name="pronouns"
				id="pronouns_other"
				type="checkbox"
				value="Other"
				bind:checked={pronounsOtherChecked}
			/>
			<span>Other</span>
			{#if pronounsOtherChecked}
				<input type="text" name="pronouns" id="pronouns_other_text" />
			{/if}
		</label>
	</div>

	<div class="form_question checkbox">
		<p>Ethnicity <em class="required">*</em></p>
		<label for="ethnicity_asian">
			<input name="ethnicity" id="ethnicity_asian" type="checkbox" value="Asian/Pacific Islander" />
			<span>Asian/Pacific Islander</span>
		</label>
		<label for="ethnicity_black">
			<input name="ethnicity" id="ethnicity_black" type="checkbox" value="Black/African American" />
			<span>Black/African American</span>
		</label>
		<label for="ethnicity_caucasian">
			<input name="ethnicity" id="ethnicity_caucasian" type="checkbox" value="Caucasian" />
			<span>Caucasian</span>
		</label>
		<label for="ethnicity_hispanic">
			<input name="ethnicity" id="ethnicity_hispanic" type="checkbox" value="Hispanic/Latine" />
			<span>Hispanic/Latine</span>
		</label>
		<label for="ethnicity_nativeamerican">
			<input
				name="ethnicity"
				id="ethnicity_nativeamerican"
				type="checkbox"
				value="Native American/Alaska Native"
			/>
			<span>Native American/Alaska Native</span>
		</label>
		<label for="ethnicity_middleeastern">
			<input
				name="ethnicity"
				id="ethnicity_middleeastern"
				type="checkbox"
				value="Middle Eastern/North African"
			/>
			<span>Middle Eastern/North African</span>
		</label>
		<label for="ethnicity_other">
			<input
				name="ethnicity"
				id="ethnicity_other"
				type="checkbox"
				value="Other"
				bind:checked={ethnicityOtherChecked}
			/>
			<span>Other</span>
			{#if ethnicityOtherChecked}
				<input type="text" name="ethnicity" id="ethnicity_other_text" />
			{/if}
		</label>
	</div>

	<div class="form_question">
		<label for="num_hackathons_attended">
			<p>
				How many hackathons have you attended? <em class="required">*</em><br /><small
					>We're just curious! We love all hackers, beginners and experts :) If AthenaHacks will be
					your first: (we're honored!), enter '0' as your answer</small
				>
			</p>
			<input
				name="num_hackathons_attended"
				id="num_hackathons_attended"
				type="number"
				min="0"
				on:keydown={verifyPositiveAndWholeNumber}
				required
			/>
		</label>
	</div>

	<div class="form_question radio">
		<p>
			Have you attended AthenaHacks before? <em class="required">*</em><br /><small
				>If so, welcome back!</small
			>
		</p>
		<label for="has_attended_athenahacks_yes">
			<input
				name="has_attended_athenahacks"
				id="has_attended_athenahacks_yes"
				type="radio"
				value="Yes"
				required
			/>
			<span>Yes</span>
		</label>
		<label for="has_attended_athenahacks_no">
			<input
				name="has_attended_athenahacks"
				id="has_attended_athenahacks_no"
				type="radio"
				value="No"
				required
			/>
			<span>No</span>
		</label>
	</div>

	<div class="form_question">
		<label for="why_athenahacks_essay">
			<p>
				Why do you want to attend AthenaHacks? <em class="required">*</em><br /><small
					>150 word limit.</small
				>
			</p>
			<textarea
				name="why_athenahacks_essay"
				id="why_athenahacks_essay"
				on:input={onInputTextArea}
				on:keyup={onKeyupTextArea}
				required
			></textarea>
		</label>
	</div>

	<div class="form_question">
		<label for="tools_technologies">
			<p>
				What tools and technologies would you be interested in learning about? <em class="required"
					>*</em
				><br /><small
					>We want this hackathon to be a fulfilling learning experience for you! 150 word limit.</small
				>
			</p>
			<textarea
				name="tools_technologies"
				id="tools_technologies"
				on:input={onInputTextArea}
				on:keyup={onKeyupTextArea}
				required
			></textarea>
		</label>
	</div>

	<div class="form_question">
		<label for="fun_theme_essay">
			<p>
				If you were a plant, what would you be? <em class="required">*</em><br /><small
					>Finally, a little fun for us to get to know you :) 150 word limit.</small
				>
			</p>
			<textarea
				name="fun_theme_essay"
				id="fun_theme_essay"
				on:input={onInputTextArea}
				on:keyup={onKeyupTextArea}
				required
			></textarea>
		</label>
	</div>

	<div class="form_question radio">
		<p>
			Will you have access to a laptop/computer and an internet connection the weekend of March 1st,
			2025? If not, please explain further so we may best assist you. <em class="required">*</em>
			<br /><small>We are collecting this information to gauge interest and resources.</small>
		</p>
		<label for="laptop_access_yes">
			<input name="laptop_access" id="laptop_access_yes" type="radio" value="Yes" required />
			<span>Yes</span>
		</label>
		<label for="laptop_access_no">
			<input name="laptop_access" id="laptop_access_no" type="radio" value="No" required />
			<span>No</span>
		</label>
	</div>

	<div class="form_question">
		<label for="portfolio_links">
			<p>
				Please share some links about you to help us get to know you better. (e.g. personal website,
				LinkedIn, Github, Devpost)
			</p>
			<textarea name="portfolio_links" id="portfolio_links" on:input={onInputTextArea}></textarea>
		</label>
	</div>

	<div class="form_question">
		<label for="resume_link">
			<p>
				Please share your resume with us! <em class="required">*</em><br /><small
					>Please share your resume as a Google Drive link. Make sure the permissions are set to
					"anyone can view"!</small
				>
			</p>
			<input name="resume_link" id="resume_link" type="text" required />
		</label>
	</div>

	<div class="form_question radio">
		<p>May we share your resume with sponsors? <em class="required">*</em></p>
		<label for="permission_to_share_resume_yes">
			<input
				name="permission_to_share_resume"
				id="permission_to_share_resume_yes"
				type="radio"
				value="Yes"
				required
			/>
			<span>Yes</span>
		</label>
		<label for="permission_to_share_resume_no">
			<input
				name="permission_to_share_resume"
				id="permission_to_share_resume_no"
				type="radio"
				value="No"
				required
			/>
			<span>No</span>
		</label>
	</div>

	<div class="form_question checkbox">
		<p>How did you hear about us? We'd love to know! <em class="required">*</em></p>
		<label for="hear_about_us_social">
			<input name="hear_about_us" id="hear_about_us_social" type="checkbox" value="Social Media" />
			<span>Social Media</span>
		</label>
		<label for="hear_about_us_google">
			<input name="hear_about_us" id="hear_about_us_google" type="checkbox" value="Google" />
			<span>Google</span>
		</label>
		<label for="hear_about_us_fair">
			<input
				name="hear_about_us"
				id="hear_about_us_fair"
				type="checkbox"
				value="Involvement Fair"
			/>
			<span>Involvement Fair</span>
		</label>
		<label for="hear_about_us_current_organizer">
			<input
				name="hear_about_us"
				id="hear_about_us_current_organizer"
				type="checkbox"
				value="Current Organizer"
			/>
			<span>Current Organizer</span>
		</label>
		<label for="hear_about_us_former_organizer">
			<input
				name="hear_about_us"
				id="hear_about_us_former_organizer"
				type="checkbox"
				value="Former Organizer"
			/>
			<span>Former Organizer</span>
		</label>
		<label for="hear_about_us_student">
			<input name="hear_about_us" id="hear_about_us_student" type="checkbox" value="Student" />
			<span>Student</span>
		</label>
		<label for="hear_about_us_other">
			<input
				name="hear_about_us"
				id="hear_about_us_other"
				type="checkbox"
				value="Other"
				bind:checked={hearAboutUsOtherChecked}
			/>
			<span>Other</span>
			{#if hearAboutUsOtherChecked}
				<input type="text" name="hear_about_us" id="hear_about_us_other_text" />
			{/if}
		</label>
	</div>

	<div class="form_question">
		<label for="additional_info">
			<p>Any additional information you'd like us to know?</p>
			<textarea name="additional_info" id="additional_info" on:input={onInputTextArea}></textarea>
		</label>
	</div>

	<div class="form_question">
		<p>
			I have read and agree to the Major League Hacking (MLH) <a
				href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
				target="_blank">Code of Conduct</a
			>. <em class="required">*</em>
		</p>
		<label for="code_of_conduct">
			<input name="code_of_conduct" id="code_of_conduct" type="checkbox" value="Agreed" required />
			<span>I agree</span>
		</label>
	</div>

	<div class="form_question">
		<p>
			I authorize you to share my application info with MLH for event administration, ranking, and
			MLH administration in-line with the. <a href="https://mlh.io/privacy" target="_blank"
				>MLH Privacy Policy</a
			>. <em class="required">*</em>
		</p>
		<label for="share_application">
			<input
				name="share_application"
				id="share_application"
				type="checkbox"
				value="Agreed"
				required
			/>
			<span>I agree</span>
		</label>
	</div>

	<div class="form_question">
		<p>
			I further agree to the terms of both the MLH Contest <a
				href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
				>Terms and Conditions</a
			>
			and the <a href="https://mlh.io/privacy" target="_blank">MLH Privacy Policy</a>.
			<em class="required">*</em>
		</p>
		<label for="terms">
			<input name="terms" id="terms" type="checkbox" value="Agreed" required />
			<span>I agree</span>
		</label>
	</div>

	<div class="form_question">
		<p>
			I authorize MLH to send me an email where I can further opt into the MLH Hacker, Events, or
			Organizer Newsletters and other communications from MLH.
		</p>
		<label for="mlh_email_list">
			<input name="mlh_email_list" id="mlh_email_list" type="checkbox" value="Agreed" />
			<span>I agree</span>
		</label>
	</div>

	<button type="submit" id="submit">Submit</button>
	<p class="errorBox" bind:this={errorBox}></p>
</form>
