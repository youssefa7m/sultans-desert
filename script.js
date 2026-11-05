
/* =========================================
   SULTANS DESERT
   BOOKING + REVIEWS + PHOTO GALLERY
   WITH PHOTO REMOVE BUTTON
========================================= */

const WHATSAPP_NUMBER = "212660733375";
const BOOKING_EMAIL = "sultansdesert@gmail.com";

/* =========================================
   BOOKING SYSTEM
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("booking-form");
  if (!form) return;

  const value = (id) =>
    document.getElementById(id)?.value?.trim() || "";

  function bookingDetails() {
    const name = value("customer-name");
    const phone = value("customer-phone");
    const activity = value("activity");
    const date = value("date");
    const people = value("people");
    const duration = value("duration");
    const notes = value("notes");

    if (!name || !phone || !activity || !date || !people) {
      alert(
        "Please complete your name, phone, activity, date and number of people."
      );
      return null;
    }

    return [
      "Hello Sultans Desert! I'd like to request a booking.",
      "",
      "Full name: " + name,
      "Phone / WhatsApp: " + phone,
      "Activity: " + activity,
      "Preferred date: " + date,
      "Number of people: " + people,
      "Duration / option: " + (duration || "Not specified"),
      "Pickup area / requests: " + (notes || "Not specified"),
      "",
      "Please confirm availability, pickup details and final price.",
      "Payment method: Cash on Arrival."
    ].join("\n");
  }

  function fillBooking(activity, option) {
    const activityField = document.getElementById("activity");
    const notesField = document.getElementById("notes");

    if (activityField) activityField.value = activity;

    if (option && notesField) {
      notesField.value = [
        notesField.value,
        "Selected option: " + option
      ].filter(Boolean).join("\n");
    }
  }

  document.querySelectorAll(".book").forEach((button) => {
    button.addEventListener("click", () => {
      fillBooking(button.dataset.package || "");

      document.getElementById("booking")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.getElementById("quad-book-button")
    ?.addEventListener("click", () => {
      fillBooking(
        "Quad Ride",
        value("quad-duration") + "; " + value("quad-sharing")
      );

      document.getElementById("booking")
        ?.scrollIntoView({ behavior: "smooth" });
    });

  document.getElementById("buggy-book-button")
    ?.addEventListener("click", () => {
      fillBooking("Buggy Ride", value("buggy-duration"));

      document.getElementById("booking")
        ?.scrollIntoView({ behavior: "smooth" });
    });

  document.getElementById("camel-book-button")
    ?.addEventListener("click", () => {
      fillBooking("Camel Ride", value("camel-duration"));

      document.getElementById("booking")
        ?.scrollIntoView({ behavior: "smooth" });
    });

  function sendEmail(message) {
    const subject = "Sultans Desert Booking Request";

    const url =
      "mailto:" + BOOKING_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(message);

    window.location.href = url;
  }

  function sendWhatsApp(message) {
    const number = WHATSAPP_NUMBER.replace(/\D/g, "");

    if (!number) {
      alert("WhatsApp number is missing.");
      return;
    }

    const url =
      "https://wa.me/" + number +
      "?text=" + encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = bookingDetails();

    if (message) sendEmail(message);
  });

  document.getElementById("send-email")
    ?.addEventListener("click", () => {
      const message = bookingDetails();
      if (message) sendEmail(message);
    });

  document.getElementById("send-whatsapp")
    ?.addEventListener("click", () => {
      const message = bookingDetails();
      if (message) sendWhatsApp(message);
    });

  const footerWhatsApp =
    document.getElementById("footer-whatsapp");

  if (footerWhatsApp) {
    footerWhatsApp.addEventListener("click", (event) => {
      event.preventDefault();

      const number = WHATSAPP_NUMBER.replace(/\D/g, "");

      if (!number) return;

      window.open(
        "https://wa.me/" + number,
        "_blank",
        "noopener,noreferrer"
      );
    });
  }
});

/* =========================================
   SUPABASE CONNECTION
========================================= */

const SUPABASE_URL =
  "https://rnytitvqrtliwtsnkaqs.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_MUi5AvqpG0iDh4yK_BkvDQ_-2bDez19";

const PHOTO_FUNCTION_URL =
  SUPABASE_URL + "/functions/v1/review-photo";

/* =========================================
   APPROVED CUSTOMER REVIEWS
========================================= */

async function getApprovedReviews() {
  const endpoint =
    SUPABASE_URL + "/rest/v1/reviews" +
    "?select=id,customer_name,rating,comment,created_at,activity_id" +
    "&approved=eq.true" +
    "&order=created_at.desc";

  try {
    const response = await fetch(endpoint, {
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY
      }
    });

    if (!response.ok) {
      throw new Error("Could not load reviews");
    }

    return await response.json();

  } catch (error) {
    console.error("Reviews error:", error);
    return [];
  }
}

/* =========================================
   DESIGN
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");

  style.textContent = `
    .guest-gallery-section {
      max-width: 1150px;
      margin: 55px auto 0;
      text-align: center;
    }

    .guest-gallery-section h2 {
      font-size: clamp(25px, 4vw, 36px);
      margin-bottom: 10px;
      color: #282923;
    }

    .guest-gallery-description {
      color: #777;
      margin-bottom: 28px;
    }

    .guest-gallery-grid {
      display: grid;
      grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin-top: 25px;
    }

    .guest-gallery-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      text-align: left;
      box-shadow: 0 5px 25px rgba(0,0,0,0.07);
    }

    .guest-gallery-card img {
      width: 100%;
      height: 230px;
      object-fit: cover;
      display: block;
      cursor: zoom-in;
    }

    .guest-gallery-card-content {
      padding: 15px;
    }

    .guest-gallery-card h3 {
      margin: 5px 0;
      font-size: 16px;
    }

    .guest-gallery-stars {
      color: #e6a529;
      letter-spacing: 2px;
      font-size: 19px;
    }

    .guest-gallery-card small {
      color: #777;
    }

    .review-photo-field {
      margin: 22px 0;
    }

    .review-photo-field label {
      display: block;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .review-photo-field input[type="file"] {
      width: 100%;
      box-sizing: border-box;
      padding: 14px;
      border: 2px dashed #c7a77b;
      border-radius: 10px;
      background: #faf8f3;
      cursor: pointer;
    }

    .review-photo-help {
      color: #777;
      font-size: 13px;
      line-height: 1.6;
      margin-top: 9px;
    }

    .review-photo-count {
      color: #555;
      font-size: 13px;
      font-weight: 600;
      margin-top: 10px;
    }

    #review-photo-preview {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 15px;
    }

    .review-photo-tile {
      position: relative;
      overflow: hidden;
      border-radius: 11px;
      background: #eee;
      border: 1px solid #e5e5e5;
    }

    .review-photo-tile img {
      width: 100%;
      height: 115px;
      object-fit: cover;
      display: block;
    }

    .review-photo-remove {
      position: absolute;
      top: 6px;
      right: 6px;
      width: 31px;
      height: 31px;
      border: none;
      border-radius: 50%;
      background: #cc3030;
      color: white;
      font-size: 24px;
      font-weight: bold;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 2;
      box-shadow: 0 2px 8px rgba(0,0,0,.25);
    }

    .review-photo-remove:hover {
      background: #941c1c;
      transform: scale(1.06);
    }

    .review-photo-remove:focus-visible {
      outline: 3px solid #111;
      outline-offset: 2px;
    }

    .review-photo-tile-name {
      display: block;
      padding: 6px;
      color: #555;
      font-size: 11px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    @media (max-width: 600px) {
      .guest-gallery-grid {
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .guest-gallery-card img {
        height: 160px;
      }

      .guest-gallery-card-content {
        padding: 10px;
      }

      .review-photo-tile img {
        height: 95px;
      }

      .review-photo-remove {
        width: 28px;
        height: 28px;
        font-size: 21px;
      }
    }
  `;

  document.head.appendChild(style);
});

/* =========================================
   APPROVED PHOTO GALLERY
========================================= */

async function loadGuestPhotoGallery() {
  const gallery =
    document.getElementById("guest-gallery-grid");

  if (!gallery) return;

  gallery.textContent = "Loading guest photos...";

  try {
    const response = await fetch(PHOTO_FUNCTION_URL, {
      method: "GET",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY
      }
    });

    if (!response.ok) {
      throw new Error("Unable to load gallery");
    }

    const result = await response.json();
    const photos = Array.isArray(result.photos)
      ? result.photos
      : [];

    gallery.replaceChildren();

    if (!photos.length) {
      gallery.textContent =
        "Approved guest photos will appear here soon.";
      return;
    }

    photos.forEach((photo) => {
      if (!photo.image_url) return;

      const card = document.createElement("article");
      card.className = "guest-gallery-card";

      const img = document.createElement("img");
      img.src = photo.image_url;
      img.alt = "Agafay Desert guest experience";
      img.loading = "lazy";
      img.referrerPolicy = "no-referrer";

      img.addEventListener("click", () => {
        window.open(
          photo.image_url,
          "_blank",
          "noopener,noreferrer"
        );
      });

      const content = document.createElement("div");
      content.className = "guest-gallery-card-content";

      const stars = document.createElement("div");
      stars.className = "guest-gallery-stars";

      const rating = Math.max(
        1,
        Math.min(5, Number(photo.rating) || 1)
      );

      stars.textContent =
        "★".repeat(rating) +
        "☆".repeat(5 - rating);

      const name = document.createElement("h3");
      name.textContent =
        photo.customer_name || "Sultans Desert Guest";

      const activity = document.createElement("small");
      activity.textContent = photo.activity_name || "";

      content.append(stars, name, activity);
      card.append(img, content);
      gallery.appendChild(card);
    });

  } catch (error) {
    console.error("Gallery error:", error);

    gallery.textContent =
      "Guest photos are temporarily unavailable.";
  }
}

/* =========================================
   ADD GALLERY AUTOMATICALLY
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const reviewsSection =
    document.getElementById("reviews");

  if (!reviewsSection) return;

  if (!document.getElementById("guest-gallery")) {
    const section = document.createElement("section");
    section.id = "guest-gallery";
    section.className = "guest-gallery-section";

    const heading = document.createElement("h2");
    heading.textContent = "Guest Photo Gallery";

    const description = document.createElement("p");
    description.className = "guest-gallery-description";
    description.textContent =
      "Real moments shared by our guests in Agafay Desert.";

    const grid = document.createElement("div");
    grid.id = "guest-gallery-grid";
    grid.className = "guest-gallery-grid";

    section.append(heading, description, grid);

    const formBox =
      reviewsSection.querySelector(".review-form-box");

    if (formBox) {
      reviewsSection.insertBefore(section, formBox);
    } else {
      reviewsSection.appendChild(section);
    }
  }

  loadGuestPhotoGallery();
});

/* =========================================
   CUSTOMER PHOTO UPLOAD FIELD
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const reviewForm =
    document.getElementById("customer-review-form");

  if (!reviewForm) return;

  const submitButton =
    document.getElementById("review-submit");

  if (!submitButton) return;

  const photoContainer = document.createElement("div");
  photoContainer.className = "review-photo-field";

  const label = document.createElement("label");
  label.htmlFor = "review-photos";
  label.textContent = "Add Your Photos (Optional)";

  const photoInput = document.createElement("input");
  photoInput.type = "file";
  photoInput.id = "review-photos";
  photoInput.name = "review-photos";
  photoInput.accept = "image/jpeg,image/png,image/webp";
  photoInput.multiple = true;

  const help = document.createElement("p");
  help.className = "review-photo-help";
  help.textContent =
    "Choose up to 3 photos, maximum 5 MB each. " +
    "You can remove any photo using the red X " +
    "before submitting your review. " +
    "Photos are published only after approval.";

  const countMessage = document.createElement("p");
  countMessage.className = "review-photo-count";
  countMessage.setAttribute("aria-live", "polite");

  const preview = document.createElement("div");
  preview.id = "review-photo-preview";

  photoContainer.append(
    label,
    photoInput,
    help,
    countMessage,
    preview
  );

  reviewForm.insertBefore(photoContainer, submitButton);

  /* =========================================
     SELECTED PHOTOS STATE
  ========================================= */

  let selectedPhotos = [];
  let previewUrls = [];

  function clearPreviewUrls() {
    previewUrls.forEach((url) => {
      URL.revokeObjectURL(url);
    });

    previewUrls = [];
  }

  function renderPhotoPreview() {
    clearPreviewUrls();
    preview.replaceChildren();

    const numberOfPhotos = selectedPhotos.length;

    countMessage.textContent =
      numberOfPhotos +
      " of 3 photos selected";

    selectedPhotos.forEach((file, index) => {
      const tile = document.createElement("div");
      tile.className = "review-photo-tile";

      const image = document.createElement("img");
      const objectUrl = URL.createObjectURL(file);

      previewUrls.push(objectUrl);

      image.src = objectUrl;
      image.alt = "Selected photo " + (index + 1);

      const removeButton =
        document.createElement("button");

      removeButton.type = "button";
      removeButton.className = "review-photo-remove";
      removeButton.textContent = "×";

      removeButton.setAttribute(
        "aria-label",
        "Remove photo " + (index + 1)
      );

      removeButton.title = "Remove this photo";

      /* REMOVE ONLY THIS PHOTO */

      removeButton.addEventListener("click", () => {
        selectedPhotos.splice(index, 1);

        renderPhotoPreview();
      });

      const fileName = document.createElement("span");
      fileName.className = "review-photo-tile-name";
      fileName.textContent = file.name;

      tile.append(image, removeButton, fileName);
      preview.appendChild(tile);
    });
  }

  renderPhotoPreview();

  /* =========================================
     SELECT NEW PHOTOS
  ========================================= */

  photoInput.addEventListener("change", () => {
    const newFiles = Array.from(photoInput.files || []);

    // Reset the picker, but keep our selectedPhotos.
    // This lets the customer add or remove photos.
    photoInput.value = "";

    if (!newFiles.length) return;

    if (selectedPhotos.length + newFiles.length > 3) {
      alert("You can select a maximum of 3 photos.");
      return;
    }

    for (const file of newFiles) {
      if (
        !["image/jpeg", "image/png", "image/webp"]
          .includes(file.type)
      ) {
        alert("Please select JPEG, PNG or WebP photos.");
        return;
      }

      if (
        file.size < 100 ||
        file.size > 5 * 1024 * 1024
      ) {
        alert(
          "Each photo must be smaller than 5 MB."
        );
        return;
      }
    }

    newFiles.forEach((file) => {
      selectedPhotos.push(file);
    });

    renderPhotoPreview();
  });

  /* =========================================
     SEND REVIEW WITH PHOTOS
  ========================================= */

  reviewForm.addEventListener(
    "submit",
    async (event) => {
      const files = Array.from(selectedPhotos);

      // If no photos are selected,
      // index.html handles the normal review.
      if (files.length === 0) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      const status =
        document.getElementById("review-status");

      const button =
        document.getElementById("review-submit");

      if (!status || !button) return;

      const enteredToken =
        document.getElementById("review-token")
          .value.trim();

      const token = /^SDMMT-/i.test(enteredToken)
        ? enteredToken.toUpperCase()
        : enteredToken;

      const name =
        document.getElementById("review-name")
          .value.trim();

      const rating = Number(
        document.getElementById("review-rating").value
      );

      const comment =
        document.getElementById("review-comment")
          .value.trim();

      const validToken =
        /^(?:SDMMT-[A-F0-9]{16}|[a-f0-9]{64})$/.test(token);

      if (
        !validToken ||
        name.length < 2 ||
        name.length > 80 ||
        !Number.isInteger(rating) ||
        rating < 1 ||
        rating > 5 ||
        comment.length < 1 ||
        comment.length > 2000 ||
        files.length > 3
      ) {
        status.textContent =
          "Please check your review information.";
        return;
      }

      for (const file of files) {
        if (
          !["image/jpeg", "image/png", "image/webp"]
            .includes(file.type) ||
          file.size > 5 * 1024 * 1024 ||
          file.size < 100
        ) {
          status.textContent =
            "Photos must be JPEG, PNG or WebP and under 5 MB.";
          return;
        }
      }

      button.disabled = true;

      let reviewSaved = false;
      let uploadedPhotos = 0;

      try {
        status.textContent =
          "Submitting your review...";

        /* STEP 1: SAVE THE REVIEW */

        const response = await fetch(
          SUPABASE_URL + "/rest/v1/rpc/submit_review",
          {
            method: "POST",
            headers: {
              apikey: SUPABASE_PUBLISHABLE_KEY,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              p_token: token,
              p_customer_name: name,
              p_rating: rating,
              p_comment: comment
            })
          }
        );

        if (!response.ok) {
          throw new Error("Review could not be saved");
        }

        const rawResult = await response.text();

        let reviewId;

        try {
          reviewId = JSON.parse(rawResult);
        } catch (_) {
          reviewId = rawResult.trim();
        }

        if (typeof reviewId !== "string") {
          throw new Error("Missing review ID");
        }

        reviewSaved = true;

        /* STEP 2: UPLOAD PHOTOS */

        for (let i = 0; i < files.length; i++) {
          status.textContent =
            "Uploading photo " +
            (i + 1) +
            " of " +
            files.length +
            "...";

          const data = new FormData();

          data.append("token", token);
          data.append("review_id", reviewId);
          data.append("photo", files[i]);

          const uploadResponse = await fetch(
            PHOTO_FUNCTION_URL,
            {
              method: "POST",
              headers: {
                apikey: SUPABASE_PUBLISHABLE_KEY
              },
              body: data
            }
          );

          if (!uploadResponse.ok) {
            throw new Error(
              "Photo " + (i + 1) + " upload failed"
            );
          }

          uploadedPhotos++;
        }

        /* STEP 3: SUCCESS */

        reviewForm.reset();

        selectedPhotos = [];
        renderPhotoPreview();

        status.textContent =
          "Thank you! Your review and " +
          uploadedPhotos +
          " photo(s) were submitted successfully. " +
          "They are waiting for approval.";

      } catch (error) {
        console.error("Review/photo upload error:", error);

        if (reviewSaved) {
          status.textContent =
            "Your review was saved, but only " +
            uploadedPhotos +
            " of " +
            files.length +
            " photos uploaded. " +
            "Please contact Sultans Desert for help. " +
            "Do not submit the review again.";
        } else {
          status.textContent =
            "Unable to submit your review. " +
            "Please check your invitation code and try again.";
        }

      } finally {
        button.disabled = false;
      }
    },
    true
  );
});

/* =========================================
   BOOKING RECORD + PRIVATE REVIEW LINKS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  // Automatically fill the guest's review
  // code when opening their private link.

  const urlParams =
    new URLSearchParams(window.location.search);

  const linkCode = urlParams.get("review");

  if (linkCode) {
    const code = /^SDMMT-/i.test(linkCode)
      ? linkCode.toUpperCase()
      : linkCode;

    const validCode =
      /^(?:SDMMT-[A-F0-9]{16}|[a-f0-9]{64})$/.test(code);

    if (validCode) {
      const reviewTokenField =
        document.getElementById("review-token");

      if (reviewTokenField) {
        reviewTokenField.value = code;

        // Remove the code from the address bar.
        urlParams.delete("review");

        const remainingQuery = urlParams.toString();

        window.history.replaceState(
          window.history.state,
          "",
          window.location.pathname +
          (remainingQuery ? "?" + remainingQuery : "") +
          (window.location.hash || "#reviews")
        );
      }
    }
  }

  const bookingForm =
    document.getElementById("booking-form");

  if (!bookingForm) return;

  /* =========================================
     CUSTOMER REVIEW CONSENT
  ========================================= */

  const consentWrapper =
    document.createElement("div");

  consentWrapper.className =
    "review-followup-consent";

  consentWrapper.style.margin = "18px 0";
  consentWrapper.style.fontSize = "14px";
  consentWrapper.style.lineHeight = "1.6";

  const consentLabel =
    document.createElement("label");

  consentLabel.style.display = "flex";
  consentLabel.style.alignItems = "flex-start";
  consentLabel.style.gap = "10px";

  const consentCheckbox =
    document.createElement("input");

  consentCheckbox.id = "review-followup-consent";
  consentCheckbox.type = "checkbox";
  consentCheckbox.style.width = "18px";
  consentCheckbox.style.height = "18px";
  consentCheckbox.style.marginTop = "3px";
  consentCheckbox.style.flexShrink = "0";

  const consentText =
    document.createElement("span");

  consentText.textContent =
    "I agree to receive one optional WhatsApp message " +
    "asking for a review after my experience.";

  consentLabel.append(
    consentCheckbox,
    consentText
  );

  consentWrapper.appendChild(consentLabel);

  const firstBookingButton =
    bookingForm.querySelector('button[type="submit"]');

  if (firstBookingButton) {
    bookingForm.insertBefore(
      consentWrapper,
      firstBookingButton
    );
  } else {
    bookingForm.appendChild(consentWrapper);
  }

  /* =========================================
     RECORD BOOKING IN SUPABASE
  ========================================= */

  let requestId = crypto.randomUUID();
  let previousSignature = null;

  function recordBookingRequest() {
    const value = (id) =>
      document.getElementById(id)?.value?.trim() || "";

    const name = value("customer-name");
    const phone = value("customer-phone");
    const activity = value("activity");
    const requestedDate = value("date");
    const partySize = Number(value("people"));
    const notes = value("notes");

    if (
      name.length < 2 ||
      phone.replace(/\D/g, "").length < 8 ||
      !activity ||
      !/^\d{4}-\d{2}-\d{2}$/.test(requestedDate) ||
      !Number.isInteger(partySize) ||
      partySize < 1 ||
      partySize > 30
    ) {
      return;
    }

    const signature = JSON.stringify([
      name,
      phone,
      activity,
      requestedDate,
      partySize,
      notes,
      consentCheckbox.checked
    ]);

    if (previousSignature !== signature) {
      requestId = crypto.randomUUID();
      previousSignature = signature;
    }

    const payload = {
      request_id: requestId,
      customer_name: name,
      whatsapp_number: phone,
      activity_name: activity,
      requested_date: requestedDate,
      party_size: partySize,
      pickup_notes: notes,
      review_opt_in: consentCheckbox.checked
    };

    // Save the booking without interrupting
    // the existing WhatsApp or Email buttons.

    fetch(
      SUPABASE_URL + "/functions/v1/booking-request",
      {
        method: "POST",
        keepalive: true,
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    )
    .then((response) => {
      if (!response.ok) {
        console.warn(
          "Booking request was not saved."
        );
      }
    })
    .catch((error) => {
      console.warn(
        "Booking recording failed:",
        error
      );
    });
  }

  bookingForm.addEventListener(
    "submit",
    recordBookingRequest,
    true
  );

  document.getElementById("send-whatsapp")
    ?.addEventListener(
      "click",
      recordBookingRequest,
      true
    );

  document.getElementById("send-email")
    ?.addEventListener(
      "click",
      recordBookingRequest,
      true
    );
});

/* =====================================================
   SULTANS DESERT — DESERT MOTION FOR PACKAGE PHOTOS
   Cinematic pan, scroll reveal, moving camel/quad/buggy.
   Drawn silhouettes are decorative; original photos stay intact.
===================================================== */

(() => {
  "use strict";

  function setupDesertMotion() {
    if (document.getElementById("sd-desert-motion-css")) return;

    const style = document.createElement("style");
    style.id = "sd-desert-motion-css";

    style.textContent = `
      #packs .sd-motion-card,
      #activities .sd-motion-card {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity .8s ease, transform .8s ease,
                    box-shadow .35s ease;
      }

      #packs .sd-motion-card.sd-revealed,
      #activities .sd-motion-card.sd-revealed {
        opacity: 1;
        transform: translateY(0);
      }

      .sd-motion-card:hover {
        box-shadow: 0 16px 36px rgba(60,39,18,.16);
      }

      .sd-motion-media {
        position: relative;
        width: 100%;
        height: 220px;
        overflow: hidden;
        isolation: isolate;
        background: #bca17a;
      }

      .sd-motion-media > img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.055);
        animation: sd-pan 12s ease-in-out infinite alternate;
        animation-play-state: paused;
      }

      .sd-motion-card.sd-playing .sd-motion-media > img {
        animation-play-state: running;
      }

      .sd-motion-media::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;

        background: linear-gradient(
          110deg,
          transparent 25%,
          rgba(255,235,196,.08) 42%,
          rgba(255,246,222,.24) 50%,
          rgba(255,235,196,.08) 58%,
          transparent 75%
        );

        transform: translateX(-140%);
        animation: sd-glow 9s ease-in-out infinite;
        animation-play-state: paused;
      }

      .sd-motion-card.sd-playing .sd-motion-media::before {
        animation-play-state: running;
      }

      .sd-dust {
        position: absolute;
        inset: auto 0 0;
        height: 36%;
        z-index: 3;
        pointer-events: none;
        opacity: .3;

        background:
          radial-gradient(
            ellipse at 20% 100%,
            rgba(238,212,164,.48),
            transparent 48%
          ),
          radial-gradient(
            ellipse at 77% 100%,
            rgba(246,227,179,.32),
            transparent 52%
          );

        animation:
          sd-dust-drift 6s ease-in-out infinite alternate;
        animation-play-state: paused;
      }

      .sd-motion-card.sd-playing .sd-dust {
        animation-play-state: running;
      }

      .sd-runner {
        position: absolute;
        z-index: 4;
        bottom: 5px;
        left: -110px;
        width: 96px;
        height: 58px;
        opacity: 0;
        pointer-events: none;

        filter:
          drop-shadow(0 4px 3px rgba(25,19,12,.4));

        animation: sd-run-across 12s linear infinite;
        animation-play-state: paused;
      }

      .sd-runner[data-kind="camel"] {
        width: 91px;
        bottom: 9px;
      }

      .sd-runner[data-kind="buggy"] {
        width: 106px;
      }

      .sd-runner[data-second="yes"] {
        bottom: 20px;
        width: 70px;
        animation-duration: 17s;
        animation-delay: -6s;
        opacity: .5;
      }

      .sd-runner svg {
        display: block;
        width: 100%;
        height: 100%;
      }

      .sd-motion-card.sd-playing .sd-runner {
        animation-play-state: running;
      }

      .sd-runner .sd-wheel {
        transform-box: fill-box;
        transform-origin: center;
        animation: sd-wheel-spin .5s linear infinite;
      }

      .sd-runner .sd-leg-a,
      .sd-runner .sd-leg-b {
        transform-box: fill-box;
        transform-origin: center top;

        animation:
          sd-leg-swing .33s ease-in-out
          infinite alternate;
      }

      .sd-runner .sd-leg-b {
        animation-direction: alternate-reverse;
      }

      .sd-runner .sd-ride-body {
        animation:
          sd-ride-bump .42s ease-in-out
          infinite alternate;
      }

      .sd-motion-card:hover
      .sd-motion-media > img {
        animation-duration: 7s;
      }

      .sd-motion-card:hover
      .sd-runner:not([data-second]) {
        animation-duration: 8s;
      }

      @keyframes sd-pan {
        from {
          transform:
            scale(1.055)
            translate(-1.1%,0);
        }

        to {
          transform:
            scale(1.14)
            translate(1.1%,-1.4%);
        }
      }

      @keyframes sd-glow {
        0%,22% {
          transform: translateX(-140%);
          opacity: 0;
        }

        38% {
          opacity: .9;
        }

        68%,100% {
          transform: translateX(140%);
          opacity: 0;
        }
      }

      @keyframes sd-dust-drift {
        from {
          transform: translateX(-15px);
          opacity: .16;
        }

        to {
          transform: translateX(15px);
          opacity: .5;
        }
      }

      @keyframes sd-run-across {
        0% {
          left: -112px;
          opacity: 0;
          transform: translateY(2px);
        }

        13%,83% {
          opacity: .83;
        }

        100% {
          left: calc(100% + 20px);
          opacity: 0;
          transform: translateY(-2px);
        }
      }

      @keyframes sd-wheel-spin {
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes sd-leg-swing {
        from {
          transform: rotate(-13deg);
        }

        to {
          transform: rotate(16deg);
        }
      }

      @keyframes sd-ride-bump {
        from {
          transform: translateY(1px);
        }

        to {
          transform: translateY(-2px);
        }
      }

      @media (max-width:600px) {
        .sd-motion-media {
          height: 185px;
        }

        .sd-runner {
          width: 77px;
          height: 47px;
        }

        .sd-runner[data-kind="camel"] {
          width: 74px;
        }

        .sd-runner[data-kind="buggy"] {
          width: 84px;
        }

        .sd-runner[data-second="yes"] {
          width: 53px;
        }
      }

      @media (prefers-reduced-motion:reduce) {
        #packs .sd-motion-card,
        #activities .sd-motion-card {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }

        .sd-motion-media > img {
          animation: none !important;
          transform: none !important;
        }

        .sd-motion-media::before,
        .sd-dust {
          display: none !important;
        }

        .sd-runner {
          display: none !important;
        }
      }
    `;

    document.head.appendChild(style);

    /* ===================================
       CAMEL ILLUSTRATION
    =================================== */

    const illustrations = {
      camel: `
        <svg
          viewBox="0 0 145 85"
          aria-hidden="true"
          focusable="false"
        >
          <g
            fill="#edcf9b"
            stroke="#694d30"
            stroke-width="2.6"
            stroke-linejoin="round"
          >
            <path d="
              M18 46
              Q29 47 34 31
              Q42 12 51 34
              Q58 43 67 29
              Q76 13 84 38
              L97 44
              L106 36
              L111 18
              Q114 11 121 14
              L130 20
              L140 21
              L140 29
              L132 32
              L120 27
              L117 44
              Q115 55 95 55
              L43 55
              Q25 56 18 46Z
            "/>

            <path d="
              M127 16
              L130 8
              L134 19Z
            "/>

            <path
              class="sd-leg-a"
              d="M39 52 L47 53 L41 74 L44 80 L31 80 L34 71Z"
            />

            <path
              class="sd-leg-b"
              d="M58 54 L65 53 L69 74 L72 80 L59 80 L61 71Z"
            />

            <path
              class="sd-leg-a"
              d="M91 53 L98 52 L95 73 L99 80 L85 80 L89 72Z"
            />

            <path
              class="sd-leg-b"
              d="M104 52 L110 50 L113 74 L116 80 L104 80 L107 72Z"
            />
          </g>

          <circle
            cx="131"
            cy="23"
            r="1.8"
            fill="#4a3220"
          />
        </svg>
      `,

      /* ===================================
         QUAD ILLUSTRATION
      =================================== */

      quad: `
        <svg
          viewBox="0 0 145 85"
          aria-hidden="true"
          focusable="false"
        >
          <g
            class="sd-ride-body"
            fill="none"
            stroke="#f6dfb7"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="
                M15 57
                L32 48
                L52 46
                L67 38
                L89 40
                L109 50
                L128 55
                L129 63
                L15 63Z
              "
              fill="#d0a467"
              stroke="#553f27"
            />

            <path
              d="
                M64 40
                L66 27
                L85 26
                L92 39
                M46 45
                L37 31
              "
            />

            <circle
              cx="68"
              cy="17"
              r="9"
              fill="#f6dfb7"
              stroke="#553f27"
              stroke-width="2"
            />

            <path
              d="
                M62 27
                L53 42
                L76 44
                L88 53
              "
              stroke-width="6"
            />
          </g>

          <g class="sd-wheel">
            <circle
              cx="35"
              cy="64"
              r="15"
              fill="#252821"
              stroke="#f6dfb7"
              stroke-width="3"
            />

            <path
              d="
                M35 51 V77
                M22 64 H48
                M26 55 L44 73
                M44 55 L26 73
              "
              stroke="#e3ba81"
              stroke-width="2"
            />
          </g>

          <g class="sd-wheel">
            <circle
              cx="109"
              cy="64"
              r="15"
              fill="#252821"
              stroke="#f6dfb7"
              stroke-width="3"
            />

            <path
              d="
                M109 51 V77
                M96 64 H122
                M100 55 L118 73
                M118 55 L100 73
              "
              stroke="#e3ba81"
              stroke-width="2"
            />
          </g>
        </svg>
      `,

      /* ===================================
         BUGGY ILLUSTRATION
      =================================== */

      buggy: `
        <svg
          viewBox="0 0 150 85"
          aria-hidden="true"
          focusable="false"
        >
          <g
            class="sd-ride-body"
            fill="none"
            stroke="#f1d6a2"
            stroke-width="4.5"
            stroke-linejoin="round"
            stroke-linecap="round"
          >
            <path
              d="
                M15 57
                L38 49
                L51 23
                L100 23
                L122 49
                L137 56
                L136 62
                L15 62Z
              "
            />

            <path
              d="
                M45 49
                L105 49
                L99 24
                M53 24
                L49 49
                M78 24
                L78 49
                M20 54
                L33 39
                L47 39
              "
            />
          </g>

          <g class="sd-wheel">
            <circle
              cx="39"
              cy="64"
              r="15"
              fill="#272721"
              stroke="#f2d7a5"
              stroke-width="3"
            />

            <path
              d="
                M39 53 V75
                M28 64 H50
              "
              stroke="#f2d7a5"
              stroke-width="2"
            />
          </g>

          <g class="sd-wheel">
            <circle
              cx="116"
              cy="64"
              r="15"
              fill="#272721"
              stroke="#f2d7a5"
              stroke-width="3"
            />

            <path
              d="
                M116 53 V75
                M105 64 H127
              "
              stroke="#f2d7a5"
              stroke-width="2"
            />
          </g>
        </svg>
      `
    };

    /* ===================================
       REDUCED MOTION SUPPORT
    =================================== */

    const reduced =
      window.matchMedia &&
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    /* ===================================
       SCROLL ANIMATION OBSERVER
    =================================== */

    const observer =
      !reduced && "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add(
                    "sd-revealed",
                    "sd-playing"
                  );
                } else {
                  entry.target.classList.remove(
                    "sd-playing"
                  );
                }
              });
            },
            {
              threshold: .08,
              rootMargin: "0px 0px 35px 0px"
            }
          )
        : null;

    /* ===================================
       APPLY MOTION TO PACKAGES AND ACTIVITIES
    =================================== */

    document.querySelectorAll(
      "#packs .card, #activities .card"
    ).forEach((card, index) => {

      const img = card.querySelector(":scope > img");
      if (!img) return;

      /* Keep original image */
      const media = document.createElement("div");
      media.className = "sd-motion-media";

      img.replaceWith(media);
      media.appendChild(img);

      /* Add animated desert dust */
      const dust = document.createElement("div");
      dust.className = "sd-dust";
      dust.setAttribute("aria-hidden", "true");

      media.appendChild(dust);

      const title = (
        card.querySelector("h3")?.textContent || ""
      ).toLowerCase();

      const desc = (
        img.alt || ""
      ).toLowerCase();

      let kinds = [];

      /* Pick the right animation */
      if (
        title.includes("buggy") ||
        desc.includes("buggy")
      ) {
        kinds.push("buggy");
      } else if (
        title.includes("quad") ||
        desc.includes("quad")
      ) {
        kinds.push("quad");
      }

      if (
        title.includes("camel") ||
        (desc.includes("camel") && !kinds.length)
      ) {
        kinds.push("camel");
      }

      kinds = kinds.slice(0, 2);

      /* Animated silhouettes */
      if (!reduced) {
        kinds.forEach((kind, place) => {
          const runner = document.createElement("div");

          runner.className = "sd-runner";
          runner.dataset.kind = kind;
          runner.setAttribute("aria-hidden", "true");

          if (place === 1) {
            runner.dataset.second = "yes";
          }

          runner.style.animationDelay =
            "-" +
            ((index * 1.8 + place * 2.1) % 9) +
            "s";

          runner.innerHTML = illustrations[kind];
          media.appendChild(runner);
        });
      }

      card.classList.add("sd-motion-card");

      if (observer) {
        observer.observe(card);
      } else {
        card.classList.add(
          "sd-revealed",
          "sd-playing"
        );
      }
    });
  }

  /* ===================================
     INITIALIZE
  =================================== */

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      setupDesertMotion,
      { once: true }
    );
  } else {
    setupDesertMotion();
  }

})();
