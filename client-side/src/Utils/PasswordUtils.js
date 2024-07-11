import validator from 'validator';

export const getPasswordStrengthColor = (password) => {
  if (password.length < 6) return 'red';
  if (password.length < 10) return 'orange';
  return 'green';
};

export const getPasswordStrengthAnimation = (password) => {
  if (password.length < 6) return 'shake 0.5s';
  return 'none';
};

export const PasswordStrengthIndicator = ({ password }) => {
  let strength;

  if (password.length < 6) {
    strength = 'weak';
  } else if (password.length < 10) {
    strength = 'medium';
  } else {
    strength = 'strong';
  }

  return (
    <div 
      className={`password-strength-indicator ${strength}`}
      title={
        strength === 'weak' ? 'Use a stronger password.' :
        strength === 'medium' ? 'Good, but could be stronger.' :
        'Strong password!'
      }
    >
      Password Strength: {strength.charAt(0).toUpperCase() + strength.slice(1)}
    </div>
  );
};

export const isPasswordValid = (password) => {
  // Customize your validation logic here
  return validator.isLength(password, { min: 6 }) &&
         validator.matches(password, /[A-Z]/) && // At least one uppercase letter
         validator.matches(password, /[a-z]/) && // At least one lowercase letter
         validator.matches(password, /[0-9]/);  // At least one number
};
