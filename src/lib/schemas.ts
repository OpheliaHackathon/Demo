import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Il nome utente deve contenere almeno 3 caratteri",
    })
    .max(20, {
      message: "Il nome utente deve contenere al massimo 20 caratteri",
    })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Il nome utente può contenere solo lettere, numeri e underscore",
    }),
  password: z
    .string()
    .min(8, {
      message: "La password deve contenere almeno 8 caratteri",
    })
    .max(20, {
      message: "La password deve contenere al massimo 20 caratteri",
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      {
        message:
          "La password deve contenere almeno una lettera maiuscola, una minuscola, un numero e un carattere speciale",
      }
    ),
});

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, {
        message: "Il nome utente deve contenere almeno 3 caratteri",
      })
      .max(20, {
        message: "Il nome utente deve contenere al massimo 20 caratteri",
      })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "Il nome utente può contenere solo lettere, numeri e underscore",
      }),
    email: z
      .string()
      .email("Indirizzo email non valido")
      .min(1, {
        message: "L'email è obbligatoria",
      })
      .max(50, {
        message: "L'email deve contenere al massimo 50 caratteri",
      }),
    password: z
      .string()
      .min(8, {
        message: "La password deve contenere almeno 8 caratteri",
      })
      .max(20, {
        message: "La password deve contenere al massimo 20 caratteri",
      })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        {
          message:
            "La password deve contenere almeno una lettera maiuscola, una minuscola, un numero e un carattere speciale",
        }
      ),
    confirmPassword: z.string().min(1, {
      message: "Per favore conferma la tua password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Le password non corrispondono",
  })
  .refine((data) => data.username !== data.password, {
    message: "Il nome utente e la password non possono essere uguali",
  });