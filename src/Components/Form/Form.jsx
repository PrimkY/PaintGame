import React, {useState} from 'react';

const Form = ({title, handleClick}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passDirty, setPassDirty] = useState(false);
  const [emailError, setEmailError] = useState('Please fill the form')
  const [passError, setPassError] = useState('Please fill the form')

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const emailHandler = (e) => {
    setEmail(e.target.value)
    if(!validateEmail(e.target.value)){
      setEmailError('Uncorrect email')
    } else {
      setEmailError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'pass':
        setPassDirty(true)
        break
    }
  }


  return (
    <div>
      {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
      <input
        name='email'
        type='email'
        value={email}
        onChange={(e)=>emailHandler(e)}
        onBlur={e => blurHandler(e)}
        placeholder={'bigdaddy@gmail.com'}
      />
      {(passDirty && passError) && <div style={{color:"red"}}>{passError}</div>}
      <input
        name='pass'
        type='password'
        value={pass}
        onChange={(e)=>setPass(e.target.value)}
        onBlur={e => blurHandler(e)}
        placeholder={'******'}
      />
      <button
        onClick={()=> handleClick(email, pass)}>
        {title}
      </button>
    </div>
  )
}

export default Form;
