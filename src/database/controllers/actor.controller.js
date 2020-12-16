var User = require("../models/user.model.js");
var UserData = require("../models/user_data.model.js");
var apiResponse = require("../../core/api_response");
var successCode = require("../config/success_codes");
var errorCode = require("../config/error_codes");
var format = require("../../helpers/helper");

exports.detail = async function (req, res) {
  const { filter, phoneNumber } = req.query;
  var message = errorCode.invalid_data.message;
  var status_code = 0;
  var user_exist = false;
  var data = {};
  try {


    // Check for required parameters
    if (!phoneNumber || !filter) {
      message = errorCode.missing_fields.message;
      return;
    }

    let phone_number_value = '+' + phoneNumber;
    // Find User Info Against the given Phone
    userInfo = await User.findOne({phone_number: phone_number_value});

    // Check id data exist or not
    if (!userInfo) {
      message = errorCode.no_data.message;
      return;
    }

    // Find User Data Against the given Phone
    userData = await UserData.findOne({user_id: userInfo._id});

    if(filter == 'object'){
      data = await formatUser(userInfo, userData);
    }else if(filter == 'bool'){
      user_exist = true;
      data = {
        user_exist: user_exist
      }
    }

    message = successCode.detail.message;
    status_code = 1;
  } catch (err) {
    // Catch all the exceptions
    if (err.kind == "ObjectId") {
      message = errorCode.id_mismatch.message;
    } else {
      message = err.message;
    }
  } finally {
    // Send response to the user
    res.send(apiResponse.makeResponse(data, message, status_code));
  }
};

exports.create = async (req, res) => {
  var result = {};
  var message =  errorCode.invalid_data.message;
  var status_code = 0;
  const data = req.body;

  try {
    
    // Check for empty request object and if invalid object
    if ((data.length <= 0) || (!Array.isArray(data)))
    return;

    // Loop through the array and process each request
    for (userData of data) {

      // Check for required parameters
      if (!userData.firstName || !userData.lastName || !userData.phoneNumber) {
        message = errorCode.missing_fields.message;
        return;
      }

      let userInfoExist = await User.findOne({ phone_number: userData.phoneNumber });

      if(userInfoExist){
        message = errorCode.already_exist.message;
        return;
      }

      let userInfo = {
        phone_number: userData.phoneNumber,
        pincode: userData.pincode ? userData.pincode : "",
      };
      
      // Create New User Info
      let newUserInfo = new User(userInfo);
      await newUserInfo.save();

      let userDataInfo = {
        user_id: newUserInfo._id ? newUserInfo._id : "",
        email: userData.email ? userData.email : "",
        dateOfBirth: userData.dateOfBirth ? userData.dateOfBirth : "",
        firstName: userData.firstName ? userData.firstName : "",
        lastName: userData.lastName ? userData.lastName : "",
        picture: userData.picture ? userData.picture : "",
      };

      // Create New User Data Info
      let newUserDataInfo = new UserData(userDataInfo);
      await newUserDataInfo.save();
      result = await format.formatUserData(newUserDataInfo); 

      message = successCode.create.message;
      status_code = 1;
    }
  } catch (err) {
    //Catch all the exceptions
    message = err.message;
  } finally {
    // Send the response back to the client
    res.send(apiResponse.makeResponse(result, message, status_code));
  }
};

exports.update = async (req, res) => {
  var result = {};
  var message = errorCode.invalid_data.message;
  var status_code = 0;
  const data = req.body;

  try {
    
    // Check for empty request object and if invalid object
    if ((data.length <= 0) || (!Array.isArray(data)))
    return;

    for (userData of data) {

        // Check for required parameters
        if (!userData.firstName || !userData.lastName || !userData.phoneNumber || !userData.picture) {
          message = errorCode.missing_fields.message;
          return;
        }

        // Check for required parameters
        if (userData.email) {
          let existing_user_against_email = await User.findOne({
            email: userData.email
          });
          if(existing_user_against_email){
            message = errorCode.already_exist_mail.message;
            return;
          }
        }

        // Check if a user info exists against id in the system
        let existing_user = await User.findOne({
          phone_number: userData.phoneNumber
        });
        if (existing_user) {
          existing_user.phone_number = userData.phoneNumber;
          existing_user.pincode = userData.pincode ? userData.pincode : "";
        }
        await existing_user.save();

        // Check if a user data info exists against id in the system
        let existing_user_data = await UserData.findOne({
          user_id: existing_user._id
        });

        if (existing_user_data) {
          existing_user_data.email = userData.email ? userData.email : "";
          existing_user_data.dateOfBirth = userData.dateOfBirth ? userData.dateOfBirth : "";
          existing_user_data.firstName = userData.firstName ? userData.firstName : "";
          existing_user_data.lastName = userData.lastName ? userData.lastName : "";
          existing_user_data.picture = userData.picture ? userData.picture : "";
        }
        await existing_user_data.save();

        result = await format.formatUserData(existing_user_data); 

        message = successCode.update.message;
        status_code = 1;
      }
  } catch (err) {
    //Catch all the exceptions
    if (err.kind == "ObjectId") {
      message = errorCode.id_mismatch.message;
    } else {
      message = err.message;
    }
    status_code = 0;
  } finally {
    // Send the response back to the client
    res.send(apiResponse.makeResponse(result, message, status_code));
  }
};

exports.delete = async (req, res) => {
  var result = {
    is_deleted: true
  };
  var message = errorCode.invalid_data.message;
  var status_code = 0;
  const data = req.body;

  try {
    
    // Check for empty request object and if invalid object
    if ((data.length <= 0) || (!Array.isArray(data)))
    return;

    for (userData of data) {
      
      // Check for required parameters
      if (!userData._id) {
        message = errorCode.missing_fields.message;
        return;
      }

      //Remove User Data
      await UserData.findOneAndRemove({
        user_id: userData._id,
      });

       //Remove User Info
       let userInfo = await User.findOneAndRemove({
        _id: userData._id,
      });

      if(!userInfo){
        message = errorCode.no_record_found.message;
        return;
      }

    }

    result = {
      is_deleted: true
    }
    message = successCode.delete.message;
    status_code = 1;
  
  } catch (err) {
    //Catch all the exceptions
    if (err.kind == "ObjectId") {
      message = errorCode.id_mismatch.message;
    } else {
      message = err.message;
    }
    status_code = 0;
  } finally {
    // Send the response back to the client
    res.send(apiResponse.makeResponse(result, message, status_code));
  }
};


async function formatUser(userInfo = "", userData = "") {
  var data = {};

  console.log(userData);
  data = {
    phone_number: userInfo.phone_number ? userInfo.phone_number : "",
    pincode: userInfo.pincode ? userInfo.pincode : "",
    email: userData.email ? userData.email : "",
    dateOfBirth: userData.dateOfBirth ? userData.dateOfBirth : "",
    firstName: userData.firstName ? userData.firstName : "",
    lastName: userData.lastName ? userData.lastName : "",
    picture: userData.picture ? userData.picture : "",
   }

  return data;
}