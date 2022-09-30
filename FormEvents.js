export default () => {
  const windowEventContainers = document.querySelectorAll('.js-window-form')

  window.addEventListener('message', event => {
    // Check for any events of the type hsFormCallback and listen for the event that the form is initializing
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onBeforeFormInit') {
      ;[...windowEventContainers].forEach((container) => {

        // Add an if statement to check if the event is for our current form
        if (event.data.id === container.dataset.form) {
          const statusBox = container.querySelector('.js-window-form-status')
          statusBox.innerHTML = 'Before initializing'
        }
      })
    }

     // Check for any events of the type hsFormCallback and listen for the event that the form is fully loaded
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
      ;[...windowEventContainers].forEach((container) => {

        // Add an if statement to check if the event is for our current form
        if (event.data.id === container.dataset.form) {
          const statusBox = container.querySelector('.js-window-form-status')
          statusBox.innerHTML = 'Form ready'
        }
      })
    }

    // Check for any events of the type hsFormCallback and listen for the event that the form is being submitted.
    // Can be used to prevent submitting and validate the values of the inputs or send data to the dataLayer
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
      ;[...windowEventContainers].forEach((container) => {

        // Add an if statement to check if the event is for our current form
        if (event.data.id === container.dataset.form) {
          const statusBox = container.querySelector('.js-window-form-status')
          statusBox.innerHTML = 'Form submitting'

          // Retrieve the input value for the firstname field and store it somewhere
          const firstName = container.querySelector('input[name="firstname"]').value
          const firstNameContainer = container.querySelector('.js-window-form-name')
          firstNameContainer.innerHTML = firstName

          // Retrieve the input value for the email field and store it somewhere
          const email = container.querySelector('input[name="email"]').value
          const emailContainer = container.querySelector('.js-window-form-email')
          emailContainer.innerHTML = email
        }
      })
    }

    // Check for any events of the type hsFormCallback and listen for the event that the form is submitted.
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
      ;[...windowEventContainers].forEach((container) => {
        if (event.data.id === container.dataset.form) {
          const statusBox = container.querySelector('.js-window-form-status')
          statusBox.innerHTML = 'Form submitted'

          const formList = container.querySelector('.c-form__list')
          formList.classList.add('active')
        }
      })
    }
  });
};