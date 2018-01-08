import React from 'react';
import NavComponent from './includes/NavComponent';
import UploadPic from './global/UploadPic';
import Input from './global/Input';
import CheckBoxOrRadio from './global/CheckBoxOrRadio';
import SelectBox from './global/SelectBox';
import TextArea from './global/TextArea';
import Button from './global/Button';
export default class CreateUserComponent extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                <NavComponent/>
                <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
                    <h1 className="center-align">Create User</h1>
                    <form className='formcls' action="">
                    <div className="container">
                        <UploadPic />
                        <Input label="First Name" placeHolder="Enter First Name" name="fname" RequiredField={true} />
                        <Input label="Last Name" placeHolder="Enter Last Name" name="lname" RequiredField={true} />
                        <Input label="Designation" placeHolder="Enter Designation" name="designation" RequiredField={true} />
                        <Input label="Email" inputType="email" placeHolder="Enter Email" name="email" RequiredField={true} />
                        <Input label="Phone No" placeHolder="Enter Phone No" name="phoneno" RequiredField={true} />
                        <Input label="Address" placeHolder="Enter Your Address" name="address" RequiredField={true} />
                        <Input label="Zip Code" placeHolder="Enter Zip Code" name="zip" RequiredField={true} />
                        <CheckBoxOrRadio inputType="radio" label="Gender" name="gender" option={['Male','Female']} />
                        <SelectBox label="Country" placeHolder="Select Country" name="country" option={["India","USA","Canada"]}/>
                        <TextArea label="Tell me About Yourself" placeHolder="Tell me About Yourself" name="selfDescription" RequiredField={true} value="" />
                        <div className="clearfix">
                        <Button inputType="submit" clsName="signupbtn" name="signup" value="Submit" />
                        <Button inputType="button" clsName="cancelbtn" name="back" value="Back" />
                        </div>
                    </div>
                    </form>
                </main>
            </div>
            </div>
        );
    }
}