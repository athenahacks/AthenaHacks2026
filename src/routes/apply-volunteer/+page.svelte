<script lang="ts">
	import {
		ApplicationType,
		onInputTextArea,
		onKeyupTextArea,
		handleSubmit,
		SUCCESS_MESSAGE
	} from '$lib/apply-util';
	import '$lib/scss/_globals.scss';
	import '$lib/scss/apply-common.scss';
	import Header from '$lib/components/Header.svelte';

	let form: HTMLFormElement;
	let errorBox: HTMLParagraphElement;

	let genderOtherChecked: boolean;
	let pronounsOtherChecked: boolean;
	let hearAboutUsOtherChecked: boolean;

	async function handleSubmitWrapper(e: SubmitEvent) {
        errorBox.textContent = "";
		const result = await handleSubmit(e, form, ApplicationType.Volunteer);
		const formSuccess = result.formSuccess;
		const formMessage = result.formMessage ? result.formMessage : '';

		if (formSuccess) {
			errorBox.textContent = SUCCESS_MESSAGE;
			errorBox.style.color = 'black';
		} else {
			errorBox.textContent = formMessage;
			errorBox.style.color = 'red';
		}
	}
</script>

<svelte:head>
	<title>AthenaHacks 2025 Volunteer Application</title>
</svelte:head>

<form method="POST" on:submit|preventDefault={handleSubmitWrapper} bind:this={form}>
	<div class="header">
		<img src="/images/owl and scarecrow.png" alt="Owl and Scarecrow" />
		<Header>AthenaHacks 2025 Volunteer Application</Header>
	</div>

	<p>
		<small
			>Thank you for your interest in volunteering for AthenaHacks, Southern California's premier
			collegiate hackathon for marginalized genders, hosted annually at the University of Southern
			California (USC)!
			<br /><br />
			Our event will be held in-person on March 1-2 2025.
			<br /><br />
			We will be accepting applications on a rolling basis, so keep an eye out for an email from us once
			you apply!</small
		>
	</p>

	<div class="form_question">
		<label for="email">
			<p>
				Email Address <em class="required">*</em><br /><small>Ex: tommytrojan@usc.edu</small>
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
				Where do you go to school? If you are not currently enrolled in a school, where do you work? <em
					class="required">*</em
				><br /><small
					>Please do not abbreviate! For example, type "University of Southern California" rather
					than USC.</small
				>
			</p>
			<input name="school_name" id="school_name" type="text" required />
		</label>
	</div>

	<div class="form_question">
		<label for="linkedin">
			<p>What is your Linkedin profile? <em class="required">*</em></p>
			<input name="linkedin" id="linkedin" type="text" required />
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

	<div class="form_question">
		<label for="why_athenahacks_essay">
			<p>
				Why do you want to volunteer for AthenaHacks?<br /><small>This is optional.</small>
			</p>
			<textarea
				name="why_athenahacks_essay"
				id="why_athenahacks_essay"
				on:input={onInputTextArea}
				on:keyup={onKeyupTextArea}
			></textarea>
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

	<button type="submit" id="submit">Submit</button>
	<p class="errorBox" bind:this={errorBox}></p>
</form>

<style lang="scss">
	.header {
		img {
			width: 300px;
		}
	}
</style>
