import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Contact = () => {

  const [ t, i18n ] = useTranslation( "global" );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Mensaje enviado!: " + JSON.stringify(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder= { t( "form.name.placeholder" ) }
                {...register("name", { required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">{ t( "form.name.required" ) }</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control theme-light"
                placeholder={ t( "form.email.placeholder" ) }
                {...register(
                  "email",
                  {
                    required: t( "form.email.required" ),
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: t( "form.email.invalidMesssage" ),
                    },
                  },
                  { required: true }
                )}
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder={ t( "form.affair.placeholder" ) }
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="invalid-feedback">{ t( "form.affair.required" ) }</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <textarea
                rows="4"
                className="form-control theme-light"
                placeholder={ t( "form.comment.placeholder" ) }
                {...register("comment", { required: true })}
              ></textarea>
              {errors.comment && (
                <span className="invalid-feedback">{ t( "form.comment.required" ) }</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="btn-bar">
              <button className="px-btn px-btn-white">{ t( "form.submit" ) }</button>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </>
  );
};

export default Contact;
