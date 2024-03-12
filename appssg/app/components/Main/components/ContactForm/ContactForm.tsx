import styles from "./ContactForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { LanguageContext } from "@/page";

type Inputs = {
  contactName: string;
  email: string;
  contactPhone: string;
  description: string;
  recaptchaInput: boolean;
};
const recaptchaRef = React.createRef<any>();

const ContactForm = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);
  console.log(LanguageContext);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState<
    boolean | null
  >(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    //@ts-ignore
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      if (submittedSuccessfully === null) {
        setIsSubmitting(true);
        emailjs
          .send(
            "service_xs5ff1v",
            "template_uup5yus",
            {
              contactName: data.contactName,
              email: data.email,
              contactPhone: data.contactPhone,
              description: data.description,
            },
            "ypS5Pgln_V5cbUUTI"
          )
          .then(
            (result) => {
              console.log(result.text);
              setIsSubmitting(false);
              setSubmittedSuccessfully(true);
            },
            (error) => {
              console.log(error.text);
              setIsSubmitting(false);
              setSubmittedSuccessfully(false);
            }
          );
      }
    } else {
      setError("recaptchaInput", {
        type: "manual",
      });
    }
  };

  return (
    <div className={styles.contactFormWrapper}>
      <div className={styles.contactFormInnerWrapper}>
        <div className={styles.form}>
          <div className={styles.formTitle}>
            {currentLanguageSheet.contactFormScreen.formTitle}
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.inputsForm}>
            <input
              placeholder={
                currentLanguageSheet.contactFormScreen.formNamePlaceholder
              }
              {...register("contactName", {
                required: true,
                maxLength: 30,
              })}
              className={styles.inputWide}
            />
            <div className={styles.doubleInputsWrapper}>
              <input
                placeholder={
                  currentLanguageSheet.contactFormScreen.formEmailPlaceholder
                }
                {...register("email", {
                  required: true,
                  maxLength: 30,
                })}
                className={styles.inputShort}
              />
              <input
                placeholder={
                  currentLanguageSheet.contactFormScreen.formPhonePlaceholder
                }
                {...register("contactPhone")}
                className={styles.inputShort}
              />
            </div>
            <textarea
              placeholder={
                currentLanguageSheet.contactFormScreen
                  .formDescriptionPlaceholder
              }
              {...register("description", {
                required: true,
                maxLength: 1500,
              })}
              className={styles.textareaWide}
            />
            <ReCAPTCHA
              sitekey="6LdKjg0pAAAAAPOsDmnN8C8V2tfb1_zT1DYtZJdr"
              ref={recaptchaRef}
              lang={currentLanguageSheet.languageType === "PL" ? "pl" : "en-GB"}
            />
            <input
              disabled={isSubmitting}
              type="submit"
              className={styles.submitButton}
              value={
                submittedSuccessfully
                  ? currentLanguageSheet.contactFormScreen
                      .formSentSuccessfullyPlaceholder
                  : submittedSuccessfully === false
                  ? currentLanguageSheet.contactFormScreen
                      .formSentFailedPlaceholder
                  : submittedSuccessfully === null
                  ? currentLanguageSheet.contactFormScreen
                      .formSendButtonPlaceholder
                  : ""
              }
            />
            <div className={styles.additionalInformation}>
              {
                currentLanguageSheet.contactFormScreen
                  .formAdditionalInfoPlaceholder
              }
            </div>
            {(errors.contactName || errors.email || errors.description) && (
              <div style={{ color: "red" }}>
                {
                  currentLanguageSheet.contactFormScreen
                    .formDataErrorPlaceholder
                }
              </div>
            )}
            {errors.recaptchaInput && (
              <div style={{ color: "red" }}>
                {
                  currentLanguageSheet.contactFormScreen
                    .formRecaptchaPlaceholder
                }
              </div>
            )}
          </form>
        </div>
        <div className={styles.descriptionPart}>
          <div className={styles.descTitle}>
            {currentLanguageSheet.contactFormScreen.descTitle}
          </div>
          <div className={styles.descSubTitle}>
            {currentLanguageSheet.contactFormScreen.descSubtitle}
          </div>
          <div className={styles.descDescription}>
            {currentLanguageSheet.contactFormScreen.descDescription}
          </div>
          <div className={styles.descLocation}>
            {currentLanguageSheet.contactFormScreen.descLocalization}
          </div>
          <div className={styles.descLocationDetails}>
            <Image
              src="/LocalizationIcon.svg"
              height={50}
              width={50}
              alt={"Localization icon"}
              className={styles.localizationIcon}
            />
            <div>
              {currentLanguageSheet.contactFormScreen.descLocalizationDetails}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
