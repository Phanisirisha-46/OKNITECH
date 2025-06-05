document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openFormPopup');
  openBtn.addEventListener('click', () => {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('popup-form-wrapper');
    modalContainer.innerHTML = `
      <div class="form-header">
        <img src='./images/logo.png' alt="Logo" class="logo" />
        <h2>Get Events Registration Form</h2>
        <button class="close-btn" id="closeFormPopup">×</button>
      </div>

      <form class="registration-form">
        <div class="form-group name">
          <label>First Name</label>
          <input type="text" placeholder="Enter your name here" />
        </div>
        <div class="form-group email">
          <label>Enter Email id</label>
          <input type="email" placeholder="Enter here@mail" />
        </div>
        <div class="form-group mobile">
          <label>Mobile number</label>
          <div class="mobile-input">
            <span>+91</span>
            <input type="tel" placeholder="00000 00000" />
          </div>
        </div>
        <div class="form-group">
          <label>Date of Birth</label>
          <input type="text" placeholder="DD/MM/YYYY" />
        </div>
        <div class="form-group">
          <label>Platform Name</label>
          <input type="text" placeholder="Enter your name here" />
        </div>
        <div class="form-group">
          <label>Platform Type</label>
          <select class="dropper">
            <option>Select From below</option>
          </select>
        </div>

        <div class="form-row custom-split">
          <div class="form-group platform-link">
            <label>Platform Link</label>
            <div class="link-wrapper">
              <input type="url" placeholder="Enter Platform link" />
              <span class="paste-link">
                <img src='./images/cpy.png' alt="Copy" class="cpied" /> Paste Link
              </span>
            </div>
          </div>
          <div class="form-group additional-details">
            <label>Additional Details</label>
            <input type="text" placeholder="Enter here" />
          </div>
        </div>

        <div class="form-buttons">
          <button class="submit-btn">
            Submit <img src='./images/arrw.png' alt="Arrow" class="arrow-icon" />
          </button>
          <a href="index.html" class="login-btn">
            Go To Login Page <img src='./images/yel-arrw.png' alt="Arrow" class="arr-icon" />
          </a>
        </div>
      </form>
    `;

    const backdrop = document.createElement('div');
    backdrop.classList.add('modal-backdrop');
    backdrop.appendChild(modalContainer);
    document.body.appendChild(backdrop);

    document.getElementById('closeFormPopup').addEventListener('click', () => {
      backdrop.remove();
    });
  });
});
