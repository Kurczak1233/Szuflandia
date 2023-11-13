import styles from "./ContactForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";

type Inputs = {
  contactName: string;
  email: string;
  contactPhone: string;
  description: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const recaptchaRef = React.createRef();

  function onChange(value: any) {
    console.log("Captcha value:", value);
    //@ts-ignore
    const recaptchaValue = recaptchaRef.current.getValue();
    console.log(recaptchaValue);
  }

  return (
    <div className={styles.contactFormWrapper}>
      {/* <div className={styles.contactFormTitle}>Contact Form</div> */}
      <div className={styles.form}>
        <div className={styles.formTitle}>Formularz kontaktowy</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            placeholder="Twoje imię*"
            {...register("contactName", { required: true })}
            className={styles.inputWide}
          />
          <div className={styles.doubleInputsWrapper}>
            <input
              placeholder="Email*"
              {...register("email", { required: true })}
              className={styles.inputShort}
            />
            <input
              placeholder="Telefon kontaktowy"
              {...register("contactPhone")}
              className={styles.inputShort}
            />
          </div>
          <textarea
            placeholder="Opisz Twoje zapytanie. Podaj numer produktu i kategorię w jakiej znajduje się mebel.*"
            {...register("description", { required: true })}
            className={styles.textareaWide}
          />
          {/* errors will return when field validation fails  */}
          {(errors.contactName || errors.email || errors.description) && (
            <span>Wpisz poprawnie dane do formularza</span>
          )}
          <ReCAPTCHA
            sitekey="6LfGfA0pAAAAACvDBDqFRMLztKnQ5_0yvEqWSjxz"
            onChange={onChange}
          />
          <input
            type="submit"
            className={styles.submitButton}
            value={"Wyślij"}
          />
          <div>*Pole obowiazkowe</div>
        </form>
      </div>
      <div>Description</div>
    </div>
  );
};

export default ContactForm;
