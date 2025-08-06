import mongoose from "mongoose";
import bcrypt from "bcrypt";


const UserSchema = new mongoose.Schema({
  profileId:{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Profile", 
     },
  username:{ type:String },
  purpose: {
    type: String,
    // required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone:{
    type:String,
  },
  password: {
    type: String,
    required: true,
  },
  stripeCustomerId: { 
    type: String 
  }, // Stripe customer ID
  paypalPayerId: { 
    type: String 
  }, // PayPal payer ID
},
{ timestamps: true }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
