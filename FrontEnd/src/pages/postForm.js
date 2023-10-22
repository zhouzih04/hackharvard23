import React from 'react';
import logo from '../img/logo.png'
import '../styles/global.css'
import useForm from '../components/useForm';
import Dashboard from '../pages/Dashboard';
import{BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

const FORM_ENDPOINT = `http://localhost:3000/offer/`; // TODO - update to the correct endpoint

const PostForm = () => {
  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { handleSubmit, status, message } = useForm({
    additionalData,
  });

  if (status === "success") {
    return (
        <Dashboard />
    );
  }

  if (status === "error") {
    return (
      <Dashboard />
    );
  }

  return (
    <BrowserRouter>
    <div className='formWrapper'
    style={{textAlign: 'center'}}
    >
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className='title' style={{margin: '60px'}}>
                    <img src={logo} alt='logo' width='124' />
                    <h1> Tool Kit</h1>
                </div>
                <div className='title' >
                <h2><u>Post Your Offer</u></h2>
                </div>
                <div className='input' >
                    <input 
                        
                        style={{height:'50px', width: '250px', borderRadius: '30px', border: '1.5px solid grey', margin: '10px'}}
                        type='text'
                        placeholder='Item Name'
                        name='name'
                        required />
                </div>
                <div className='input'>
                    <input 
                        style={{height:'50px', width: '250px', borderRadius: '30px', border: '1.5px solid grey', margin: '10px'}}
                        type='text'
                        placeholder='Description'
                        name='description'
                        required />
                </div>
                <div className='input'>
                    <input 
                        style={{height:'50px', width: '250px', borderRadius: '30px', border: '1.5px solid grey', margin: '10px'}}
                        type='text'
                        placeholder='Price (only enter integers 0, 1, 2, 3)'
                        name='price_range'
                        required />
                </div>
                <div className='input'>
                    <input 
                        style={{height:'50px', width: '250px', borderRadius: '30px', border: '1.5px solid grey', margin: '10px'}}
                        type='text'
                        placeholder='Location (city, state)'
                        name='location'
                        required />
                </div>
      {status !== "loading" && (
        <div className="pt-0 mb-3"
        style={{margin: '20px'}}>
          <button
            style={{backgroundColor: '#445C78', borderRadius: '20px', color: 'white', height: '40px', width: '120px', border: '0px'}}
            className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
            type="submit"
          >
            Post offer!
          </button>
        </div>
      )}
    </form>
    </div>
    </BrowserRouter>
  );
};

export default PostForm;