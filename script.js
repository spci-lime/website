const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".site-nav");
const productField = document.querySelector("#product-field");
const inquiryTriggers = document.querySelectorAll(".inquiry-trigger");
const yearTarget = document.querySelector("#year");
const inquiryForm = document.querySelector("#inquiry-form");
const nameField = document.querySelector("#name-field");
const phoneField = document.querySelector("#phone-field");
const emailField = document.querySelector("#email-field");
const phoneError = document.querySelector("#phone-error");
const formSuccess = document.querySelector("#form-success");

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScEOwLZd-RRgDhp-xmjgIERLFeT_7V8lqEHOsmB_3xXcuZYtw/formResponse";
const GOOGLE_FORM_FIELDS = {
  name: "entry.1170973445",
  phone: "entry.1369712535",
  email: "entry.1032116418",
  product: "entry.323108046",
  quantity: "entry.2102015196",
  message: "entry.1124191931",
};

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

inquiryTriggers.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-product");
    const contactSection = document.querySelector("#contact");

    if (productField && productName) {
      productField.value = productName;
    }

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

if (inquiryForm && nameField && phoneField && emailField && phoneError && formSuccess) {
  const phonePattern = /^(?:[6-9]\d{9}|\+91[\s-]?[6-9]\d{9})$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  inquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const trimmedName = nameField.value.trim();
    const normalizedPhone = phoneField.value.replace(/\s+/g, "").trim();
    const trimmedEmail = emailField.value.trim();

    if (!trimmedName) {
      phoneError.textContent = "Please enter your name.";
      formSuccess.classList.add("hidden");
      nameField.setAttribute("aria-invalid", "true");
      nameField.focus();
      return;
    }

    if (!phonePattern.test(normalizedPhone)) {
      phoneError.textContent = "Please enter a valid 10-digit Indian mobile number, or +91 followed by 10 digits.";
      formSuccess.classList.add("hidden");
      phoneField.setAttribute("aria-invalid", "true");
      phoneField.focus();
      return;
    }

    if (trimmedEmail && !emailPattern.test(trimmedEmail)) {
      phoneError.textContent = "Please enter a valid email address.";
      formSuccess.classList.add("hidden");
      emailField.setAttribute("aria-invalid", "true");
      emailField.focus();
      return;
    }

    phoneError.textContent = "";
    formSuccess.classList.add("hidden");
    nameField.removeAttribute("aria-invalid");
    phoneField.removeAttribute("aria-invalid");
    emailField.removeAttribute("aria-invalid");

    const formData = new FormData(inquiryForm);
    const payload = new URLSearchParams();
    payload.append(GOOGLE_FORM_FIELDS.name, trimmedName);
    payload.append(GOOGLE_FORM_FIELDS.phone, normalizedPhone);
    payload.append(GOOGLE_FORM_FIELDS.email, trimmedEmail);
    payload.append(GOOGLE_FORM_FIELDS.product, formData.get("product") || "");
    payload.append(GOOGLE_FORM_FIELDS.quantity, formData.get("quantity") || "");
    payload.append(GOOGLE_FORM_FIELDS.message, formData.get("message") || "");

    const submitButton = inquiryForm.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      inquiryForm.reset();
      formSuccess.classList.remove("hidden");
      formSuccess.textContent =
        "Thank you. Your inquiry has been submitted successfully. We will get back to you soon.";
    } catch (error) {
      phoneError.textContent = "Something went wrong. Please try again or contact us on WhatsApp.";
      formSuccess.classList.add("hidden");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit Inquiry";
      }
    }
  });

  [nameField, phoneField, emailField].forEach((field) => {
    field.addEventListener("input", () => {
      phoneError.textContent = "";
      field.removeAttribute("aria-invalid");
    });
  });
}
