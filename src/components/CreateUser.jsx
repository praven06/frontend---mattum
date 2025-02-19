/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, TextField, Box, Stepper, Step, StepLabel, Paper, LinearProgress, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox } from "@mui/material";
import { motion } from "framer-motion";
import { MdPerson, MdEmail, MdOutlineLandscape, MdAttachFile, MdCheckCircle } from "react-icons/md"; // Importing icons from react-icons
import { FiCheck, FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import backgroundImage from './assets/pexels-reto-burkler-640438-1443867.jpg'; // Adjust the path as necessary

const steps = ["Personal Info", "Contact Details", "Land Details", "Legal Documents", "Review & Submit"];

const StepIcon = ({ active, completed, icon }) => {
  const icons = {
    1: <MdPerson className={`h-6 w-6 ${completed ? "text-green-500" : active ? "text-[#287344]" : "text-gray-400"}`} />,
    2: <MdEmail className={`h-6 w-6 ${completed ? "text-green-500" : active ? "text-[#287344]" : "text-gray-400"}`} />,
    3: <MdOutlineLandscape className={`h-6 w-6 ${completed ? "text-green-500" : active ? "text-[#287344]" : "text-gray-400"}`} />,
    4: <MdAttachFile className={`h-6 w-6 ${completed ? "text-green-500" : active ? "text-[#287344]" : "text-gray-400"}`} />,
    5: <MdCheckCircle className={`h-6 w-6 ${completed ? "text-green-500" : active ? "text-[#287344]" : "text-gray-400"}`} />,
  };

  return <motion.div whileHover={{ scale: 1.2 }}>{icons[icon] || null}</motion.div>;
};

const StepContent = ({ step, formData, handleChange }) => {
  const [landLocation, setLandLocation] = useState("");

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLandLocation(`${latitude}, ${longitude}`);
          handleChange({ target: { name: "landLocation", value:`${latitude}, ${longitude}`} });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to fetch location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="p-6 pt-4 bg-white/80 backdrop-blur-sm shadow-md rounded-xl border border-gray-100"
    >
      {step === 0 && (
        <Box>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            variant="outlined"
            required
            InputProps={{
              style: { borderColor: '#287344' },
            }}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            variant="outlined"
            required
            InputProps={{
              style: { borderColor: '#287344' },
            }}
          />
          <TextField
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            variant="outlined"
            required
            InputProps={{
              style: { borderColor: '#287344' },
            }}
          />
        </Box>
      )}
      {step === 1 && (
        <Box>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            variant="outlined"
            required
            InputProps={{
              style: { borderColor: '#287344' },
            }}
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            variant="outlined"
            required
            InputProps={{
              style: { borderColor: '#287344' },
            }}
          />
        </Box>
      )}
      {step === 2 && (
        <Box>
          <FormControl fullWidth margin="normal" className="mb-4" required>
            <InputLabel>Land Ownership</InputLabel>
            <Select
              name="landOwnership"
              value={formData.landOwnership}
              onChange={handleChange}
              required
              style={{ borderColor: '#287344' }}
            >
              <MenuItem value="Owned">Owned</MenuItem>
              <MenuItem value="Leased">Leased</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Total Land Size (Acres)"
            name="landSize"
            value={formData.landSize}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            variant="outlined"
            required
            InputProps={{
              style: { borderColor: '#287344' },
            }}
          />
          <TextField
            label="Land Location (GPS)"
            name="landLocation"
            value={landLocation}
            onChange={(e) => {
              setLandLocation(e.target.value);
              handleChange(e);
            }}
            fullWidth
            margin="normal"
            className="mb-4"
            variant="outlined"
            required
            InputProps={{
              style: { borderColor: '#287344' },
            }}
          />
          <Button 
            variant="contained" 
            style={{ backgroundColor: '#287344', color: '#fff' }} 
            onClick={handleUseCurrentLocation}
            className="mb-4"
          >
            Use Current Location
          </Button>
          <TextField
            label="Soil Type"
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            variant="outlined"
            required
            InputProps={{
              style: { borderColor: '#287344' },
            }}
          />
          <TextField
            label="Current Crop Cultivated"
            name="currentCrop"
            value={formData.currentCrop}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            variant="outlined"
            required
            InputProps={{
              style: { borderColor: '#287344' },
            }}
          />
          <TextField
            label="Previous Crop Grown"
            name="previousCrop"
            value={formData.previousCrop}
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            variant="outlined"
            required
            InputProps={{
              style: { borderColor: '#287344' },
            }}
          />
          <FormControlLabel control={<Checkbox name="irrigation" checked={formData.irrigation} onChange={handleChange} />} label="Irrigation Facility Available" />
          {formData.irrigation && (
            <>
              <TextField
                label="Water Source"
                name="waterSource"
                value={formData.waterSource}
                onChange={handleChange}
                fullWidth
                margin="normal"
                className="mb-4"
                variant="outlined"
                required
                InputProps={{
                  style: { borderColor: '#287344' },
                }}
              />
              <TextField
                label="Number of Wells/Pumps"
                name="numWells"
                value={formData.numWells}
                onChange={handleChange}
                fullWidth
                margin="normal"
                className="mb-4"
                variant="outlined"
                required
                InputProps={{
                  style: { borderColor: '#287344' },
                }}
              />
            </>
          )}
        </Box>
      )}
      {step === 3 && (
        <Box>
          <p className="font-bold text-lg mb-2">Legal Documents Submitted (Attach Copies)</p>
          <TextField
            type="file"
            name="aadhaar"
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            label="Aadhaar Card"
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            type="file"
            name="landPapers"
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            label="Land Ownership Papers (Patta / Title Deed)"
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            type="file"
            name="soilTest"
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            label="Soil Testing Report"
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            type="file"
            name="cropReport"
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            label="Previous Year’s Crop Production Report"
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            type="file"
            name="bankDetails"
            onChange={handleChange}
            fullWidth
            margin="normal"
            className="mb-4"
            label="Bank Account Details (For Subsidy & Loan Payments)"
            InputLabelProps={{ shrink: true }}
            required
          />
        </Box>
      )}
      {step === 4 && (
        <Box className="p-4 border border-gray-300 rounded-lg">
          <p className="font-bold text-lg mb-2">Review & Submit</p>
          <div className="grid grid-cols-2 gap-4">
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Last Name:</strong> {formData.lastName}</p>
            <p><strong>Age:</strong> {formData.age}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Land Ownership:</strong> {formData.landOwnership}</p>
            <p><strong>Total Land Size:</strong> {formData.landSize}</p>
            <p><strong>Land Location:</strong> {formData.landLocation}</p>
            <p><strong>Soil Type:</strong> {formData.soilType}</p>
            <p><strong>Current Crop:</strong> {formData.currentCrop}</p>
            <p><strong>Previous Crop:</strong> {formData.previousCrop}</p>
            <p><strong>Irrigation Facility:</strong> {formData.irrigation ? "Yes" : "No"}</p>
            {formData.irrigation && (
              <>
                <p><strong>Water Source:</strong> {formData.waterSource}</p>
                <p><strong>Number of Wells/Pumps:</strong> {formData.numWells}</p>
              </>
            )}
            <p><strong>Aadhaar Card:</strong> {formData.aadhaar ? formData.aadhaar.name : "Not uploaded"}</p>
            <p><strong>Land Ownership Papers:</strong> {formData.landPapers ? formData.landPapers.name : "Not uploaded"}</p>
            <p><strong>Soil Testing Report:</strong> {formData.soilTest ? formData.soilTest.name : "Not uploaded"}</p>
            <p><strong>Crop Production Report:</strong> {formData.cropReport ? formData.cropReport.name : "Not uploaded"}</p>
            <p><strong>Bank Account Details:</strong> {formData.bankDetails ? formData.bankDetails.name : "Not uploaded"}</p>
          </div>
        </Box>
      )}
    </motion.div>
  );
};

export default function CreateUser() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    landOwnership: "",
    landSize: "",
    landLocation: "",
    soilType: "",
    currentCrop: "",
    previousCrop: "",
    irrigation: false,
    waterSource: "",
    numWells: "",
    aadhaar: null,
    landPapers: null,
    soilTest: null,
    cropReport: null,
    bankDetails: null,
  });
  const [showTick, setShowTick] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, files, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  const handleNext = () => {
    // Log the current formData to see its state
    console.log("Current formData:", formData);
  
    // Determine which fields to validate based on the current step
    let requiredFields = [];
    
    switch (activeStep) {
      case 0:
        requiredFields = ["firstName", "lastName", "age"];
        break;
      case 1:
        requiredFields = ["email", "phone"];
        break;
      case 2:
        requiredFields = [
          "landOwnership", "landSize", "landLocation", "soilType", 
          "currentCrop", "previousCrop"
        ];
        break;
      case 3:
        // If you have specific fields to validate in step 3, add them here
        requiredFields = [ "aadhaar", "landPapers", 
          "soilTest", "cropReport", "bankDetails"];
        break;
      default:
        break;
    }
  
    const isValid = requiredFields.every(field => {
      // Check if the field is empty or null
      const isFieldValid = formData[field] !== "" && formData[field] !== null;
    //   console.log(Field: `${field}`, Valid: `${isFieldValid}`, Value: `${formData[field]}`); // Log each field's validity and value
      return isFieldValid;
    });
  
    if (!isValid) {
      alert("Please fill in all required fields.");
      return;
    }
  
    if (activeStep === steps.length - 1) {
      setShowTick(true);
      setTimeout(() => {
        setActiveStep(0);
        setShowTick(false);
        setFormData({
          firstName: "",
          lastName: "",
          age: "",
          email: "",
          phone: "",
          landOwnership: "",
          landSize: "",
          landLocation: "",
          soilType: "",
          currentCrop: "",
          previousCrop: "",
          irrigation: false,
          waterSource: "",
          numWells: "",
          aadhaar: null,
          landPapers: null,
          soilTest: null,
          cropReport: null,
          bankDetails: null,
        });
      }, 2000);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };
  const handleBack = () => setActiveStep((prev) => prev - 1);
  return (
    <section className="h-dvh flex bg-gradient-to-br from-[#f0fdf4] to-[#e0f8e9]">
    <Paper elevation={3} className="flex flex-col justify-between flex-1 p-4 py-8 max-w-4xl mx-auto my-8 rounded-2xl" sx={{backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)'}}>
      <div className="overflow-y-auto px-4">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel 
                StepIconComponent={StepIcon}
                sx={{
                  '& .MuiStepLabel-label': {
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: activeStep >= index ? '#287344' : '#94a3b8'
                  }
                }}
              >
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <LinearProgress 
          variant="determinate" 
          value={(activeStep / (steps.length - 1)) * 100} 
          className="my-6 h-2 rounded-full" 
          sx={{
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#287344',
              borderRadius: '4px'
            },
            backgroundColor: '#c6f6d5'
          }} 
        />

        <StepContent step={activeStep} formData={formData} handleChange={handleChange} />

        <Box className="flex justify-between mt-8 gap-4">
          <Button 
            disabled={activeStep === 0} 
            onClick={handleBack}
            className="bg-gray-100 text-gray-600 px-6 py-3 rounded-xl hover:bg-gray-200 transition-all font-semibold shadow-sm"
            startIcon={<FiChevronLeft className="text-lg" />}
          >
            Back
          </Button>
          
          <Button 
            onClick={handleNext}
            className="px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-md transition-all"
            style={{ 
              backgroundColor: '#287344',
              color: '#fff',
              ...(activeStep === steps.length - 1 && {
                backgroundColor: '#22c55e'
              })
            }}
            endIcon={activeStep === steps.length - 1 ? (
              <FiCheck className="text-lg" />
            ) : (
              <FiChevronRight className="text-lg" />
            )}
          >
            {activeStep === steps.length - 1 ? "Submit Application" : "Continue"}
          </Button>
        </Box>

        {showTick && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="bg-white p-8 rounded-2xl text-center shadow-xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <FiCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
              <p className="text-gray-600">Your details have been successfully recorded</p>
            </div>
          </motion.div>
        )}
      </div>
    </Paper>
  </section>
  );
}
