<div id="loginRegModal" class="login-register-form-wrapper">
    <div class="login-register-form-container">
        <div class="login-register-form-inner-container">
            <div style="display:flex; flex-direction:row-reverse; align-items:center;" class="login-form-header">
                <div style="width: fit-content; height: 30px; width: 30px;" id='modalDismiss' class="modal-dismiss-btn">
                    <img src="img/remove-button.svg" alt="">
                </div>
            </div>
            <div class="p-1">
                <div class="dark-content-divider"></div>
            </div>
            <div class="main-content-wrapper">
                <div id="formIllustWrapper" style="justify-content:center; align-items:center; padding:20px;">
                    <img class="form-illust" src="assets/freepik_assets/login-concept-illustration/3094352.jpg" alt="">
                </div>
                <div>
                    <div class="login-form-main-content d-none">
                        <h2>Login</h2>
                        <div>
                            <div class="d-flex flex-column" action="">
                                <label class="mt-2 mb-2" for="phnNumber">Phone Number</label>
                                <input name="phnNumber" id="phnNumber" class="form-input-text mt-2 mb-2" type="text">
                                <button class="send-otp-code-btn btn-primary mt-2 mb-2">Send Code</button>
                                <div id="otpSection" class="otp-section d-none flex-column">
                                    <label class="mt-2 mb-2" for="otpField">Enter OTP: </label>
                                    <input id="otpField" class="form-input-text mt-2 mb-2" type="text">
                                    <span>Resend</span>
                                    <button class="otp-submit-btn btn-primary mt-2 mb-2">Submit</button>
                                </div>
                                <!-- <div id="errorDivContainer">
                                    <div id='loginErr'>Please Enter a Valid Number</div>
                                </div> -->
                            </div>
                        </div>
                        <div class="page-switch-wrap">
                            <p>No account? </p>
                            <p><img src="img/right-arrow.svg" alt=""></p>
                            <p class="login-page-switch-btn">[ Click Here ]</p>
                        </div>
                    </div>
                    <div class="registration-form-otp-content login-reg-positioning d-flex">
                        <h2>Register</h2>
                        <div>
                            <form method="post" class="d-flex flex-column" action="">
                                <label class="mt-2 mb-2" for="regName">Name</label>
                                <input id="regName" class="form-input-text mt-2 mb-2" type="text">
                                <label class="mt-2 mb-2" for="regNumber">Phone Number</label>
                                <input name="regNumber" id="regNumber" class="form-input-text mt-2 mb-2" type="text">
                                <button class="btn-primary mt-2 mb-2">Register</button>
                            </form>
                        </div>
                        <div class="page-switch-wrap">
                            <p>Have an Account? </p>
                            <p><img src="img/right-arrow.svg" alt=""></p>
                            <p class="reg-page-switch-btn">[ Click Here ]</p>
                        </div>
                    </div>
                    <div id="errorDivContainer" class="login-reg-positioning">
                    </div>
                    <!-- <div class="registration-form-main">
                        <h2>Register</h2>
                        <div>
                            <div class="d-flex flex-column">
                                <label class="mt-2 mb-2" for="regNumberMain">Phone</label>
                                <input id="regNumberMain" type="text">
                                <label class="mt-2 mb-2" for="regName">Name</label>
                                <input id="regName" type="text">
                                <label class="mt-2 mb-2" for="regAddress">Address</label>
                                <input id="regAddress" type="text">
                                <label class="mt-2 mb-2" for="regEmail">Email</label>
                                <input id="regEmail" type="text">
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</div>