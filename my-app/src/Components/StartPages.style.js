
import styled from "styled-components";

export const StartPagesContainer = styled.div`

    
.login-container {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f0f4f8;
}

.login-left {
  width: 66.6%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(228,234,246,255);
}

.chart-image {
  height: 80%;
  object-fit: cover;
  width : auto;
}

.login-right {
  width: 33.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  overflow-y: auto;
}

.login-form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
/*   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  border-radius: 10px;
  background-color: #fff;
}

.image-title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-title {
  color: #384C8D;
  margin-bottom: 30px;
  text-align: center;
  font-size: 36px;
}

.login-input {
  background-color: rgba(228,234,246,255);;
  width: 100%;
  padding: 15px 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold; 
  font-size: 15px;
}

.login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.forgot-password {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}
 
.forgot-password:hover {
  text-decoration: underline;
}

.remember-me {
  display: flex;
  align-items: center;
}
.remember-me > input {
  cursor: pointer;
}
.remember-me p {
  font-weight: bold;
  margin-right: 5px;
  color: #4B5563;
}

.login-button {
  width: 100%;
  padding: 15px;
  background-color: rgba(89,126,247,255);
  border: none;
  color: #fff;
  border-radius: 15px;
  cursor: pointer;
  font-size: 17px;
}

.login-button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-bottom: 10px;
  text-align: center;
}

.register-link-container {
  width : 100%;
  max-width: 360px;
  display: flex;
  justify-content: space-around;
}

.register-text {
  font-weight: bold;
  color: #4B5563;
  cursor: default;
}

.register-link {
  font-weight: bold;
  text-decoration: none;
  color: #0070BA;
}

.register-link:hover {
  text-decoration: underline;
}

`
