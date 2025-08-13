// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import InputField from '@/components/ui/InputField';
// import GoogleIcon from '@/components/svg/googleIcon';
// import FacebookIcon from '@/components/svg/facebookIcon';
// import GithubIcon from '@/components/svg/githubIcon';
// import LinkedinIcon from '@/components/svg/linkedinIcon';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { toast } from "react-toastify";

// export default function RegisterPage() {
//   const router = useRouter();
//   const [role, setRole] = useState<"USER" | "DOCTOR">("USER");

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneCode: "+880",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     bmdcNumber: "",
//     agreed: false,
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const target = e.target as HTMLInputElement | HTMLSelectElement;
//     const { name, value, type } = target;
//     setFormData({
//       ...formData,
//       [name]:
//         type === "checkbox" ? (target as HTMLInputElement).checked : value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       toast.warn("Password & Confirm Password do not match!");
//       return;
//     }

//     try {
//       const payload =
//         role === "DOCTOR"
//           ? { ...formData, role: "DOCTOR" }
//           : { ...formData, role: "USER" };

//       let res = await axios.post("api/auth/signup", payload);
//       toast.success("Sign Up success!");
//       router.push("/dashboard/patient");
//     } catch (error: any) {
//       toast.warn(error.response?.data?.error || "Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-[#EBFFFE] md:bg-white text-black">
//       <div className="hidden md:block relative w-full md:w-1/2 h-64 md:h-auto">
//         <Image
//           src="/register-image.jpg"
//           alt="Register visual"
//           fill
//           className="object-cover"
//         />
//       </div>

//       <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
//         <div className="max-w-md w-full">
//           {/* Logo */}
//           <div className="w-[102px] h-[102px]">
//             <Image
//               src="/logo.png"
//               alt="Logo"
//               width={102}
//               height={102}
//               className="object-contain"
//             />
//           </div>

//           <h2 className="text-[24px] font-semibold text-[#06688E] mt-2">
//             Register
//           </h2>

//           {/* Role Selector */}
//           <div className="mt-4">
//             <label className="block text-sm mb-1">Select Role</label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value as "USER" | "DOCTOR")}
//               className="w-full border border-[#C0C0C0] rounded-md px-3 py-2 bg-transparent"
//             >
//               <option value="USER">User</option>
//               <option value="DOCTOR">Doctor</option>
//             </select>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//             <div className="flex gap-2">
//               <InputField
//                 label="First Name"
//                 placeholder="Ali"
//                 name="firstName"
//                 required
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 borderColor="border-[#C0C0C0]"
//                 bgColor="transparent"
//               />
//               <InputField
//                 label="Last Name"
//                 placeholder="Ahmed"
//                 name="lastName"
//                 required
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 borderColor="border-[#C0C0C0]"
//                 bgColor="transparent"
//               />
//             </div>

//             <div>
//               <InputField
//                 label="Email Address"
//                 placeholder="Email Address"
//                 name="email"
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 borderColor="border-[#C0C0C0]"
//                 bgColor="transparent"
//               />
//             </div>

//             {/* Phone Code + Phone Number */}
//             <div className="flex gap-2">
//               <div className="w-1/3">
//                 <label className="block text-sm mb-1">Code</label>
//                 <select
//                   name="phoneCode"
//                   value={formData.phoneCode}
//                   onChange={handleChange}
//                   className="w-full border border-[#C0C0C0] rounded-md px-3 py-2 bg-transparent"
//                 >
//                   <option value="+880">+880 (BD)</option>
//                   <option value="+91">+91 (IN)</option>
//                   <option value="+971">+971 (AE)</option>
//                   <option value="+1">+1 (US)</option>
//                 </select>
//               </div>
//               <InputField
//                 label="Phone Number"
//                 placeholder="01711111111"
//                 type="tel"
//                 name="phoneNumber"
//                 required
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 borderColor="border-[#C0C0C0]"
//                 bgColor="transparent"
//               />
//             </div>

//             <div className="flex gap-2">
//               <InputField
//                 label="Password"
//                 placeholder="Password"
//                 type="password"
//                 name="password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 borderColor="border-[#C0C0C0]"
//                 bgColor="transparent"
//               />
//               <InputField
//                 label="Confirm Password"
//                 placeholder="Type Again"
//                 type="password"
//                 name="confirmPassword"
//                 required
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 borderColor="border-[#C0C0C0]"
//                 bgColor="transparent"
//               />
//             </div>

//             {/* Doctor Only Field */}
//             {role === "DOCTOR" && (
//               <InputField
//                 label="BMDC Number"
//                 placeholder="BMDC-98765"
//                 name="bmdcNumber"
//                 required
//                 value={formData.bmdcNumber}
//                 onChange={handleChange}
//                 borderColor="border-[#C0C0C0]"
//                 bgColor="transparent"
//               />
//             )}

//             <label className="flex items-center text-sm gap-2 mt-2">
//               <input
//                 type="checkbox"
//                 name="agreed"
//                 checked={formData.agreed}
//                 onChange={handleChange}
//                 required
//                 className="accent-teal-600"
//               />
//               <p className="text-[#616060]">I agree to the</p>
//               <a className="text-[#2B6F71]" href="#">
//                 Terms of Use
//               </a>
//               &
//               <a className="text-[#2B6F71]" href="#">
//                 Privacy Policy
//               </a>
//             </label>

//             <button
//               type="submit"
//               className="w-full bg-[#06688E] text-white py-2 rounded-full"
//             >
//               Register
//             </button>
//           </form>

//           {/* Social Logins */}
//           <div className="mt-4 text-sm text-[#616060]">
//             Or Sign Up Via Social Network
//           </div>
//           <div className="flex space-x-1 mt-6">
//             <div className="bg-[#E22F31] text-white h-[40px] w-[40px] rounded flex items-center justify-center">
//               <GoogleIcon />
//             </div>
//             <div className="bg-black text-white h-[40px] w-[40px] rounded flex items-center justify-center">
//               <GithubIcon />
//             </div>
//             <div className="bg-[#4676ED] text-white h-[40px] w-[40px] rounded flex items-center justify-center">
//               <FacebookIcon />
//             </div>
//             <button className="bg-[#0A66C2] text-white h-[40px] w-[40px] rounded flex items-center justify-center">
//               <LinkedinIcon />
//             </button>
//           </div>

//           <div className="text-center text-[16px] text-[#AAAAAA] mt-[80px]">
//             © 2022, Smart Care - Design by Doctor
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import InputField from "@/components/ui/InputField";
import GoogleIcon from "@/components/svg/googleIcon";
import FacebookIcon from "@/components/svg/facebookIcon";
import GithubIcon from "@/components/svg/githubIcon";
import LinkedinIcon from "@/components/svg/linkedinIcon";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useRegisterMutation } from "@/lib/redux/services/authApi";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setCredentials } from "@/lib/redux/features/auth/authSlice";

export default function RegisterPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [role, setRole] = useState<"USER" | "DOCTOR">("USER");
  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "+880",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    bmdcNumber: "",
    agreed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.warn("Password & Confirm Password do not match!");
      return;
    }

    const basePayload = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phoneCode: formData.phoneCode,
      phoneNumber: formData.phoneNumber.trim(),
      password: formData.password,
    };

    const payload =
      role === "DOCTOR"
        ? {
            ...basePayload,
            role: "DOCTOR" as const,
            bmdcNumber: formData.bmdcNumber.trim(),
          }
        : { ...basePayload, role: "USER" as const };

    try {
      const res = await register(payload).unwrap();
      if (res?.user || res?.token) {
        dispatch(
          setCredentials({ user: res.user ?? null, token: res.token ?? null })
        );
      }
      toast.success("Sign Up success!");
      router.push("/dashboard/patient");
    } catch (err: any) {
      const apiError =
        err?.data?.error || err?.data?.message || "Something went wrong";
      toast.warn(apiError);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#EBFFFE] md:bg-white text-black">
      <div className="hidden md:block relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src="/register-image.jpg"
          alt="Register visual"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
        <div className="max-w-md w-full">
          <div className="w-[102px] h-[102px]">
            <Image
              src="/logo.png"
              alt="Logo"
              width={102}
              height={102}
              className="object-contain"
            />
          </div>
          <h2 className="text-[24px] font-semibold text-[#06688E] mt-2">
            Register
          </h2>
          <div className="flex justify-between">
            <p className="text-gray-500 mt-[6px] mb-[32px]">
              Create new account
            </p>
            <Link
              href="/login"
              className="text-sm text-[#2B6F71] mt-[6px] hover:underline ml-2"
            >
              Login
            </Link>
          </div>

          {/* Role Selector */}
          <div className="mt-2">
            <label className="block text-sm mb-1">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as "USER" | "DOCTOR")}
              className="w-full border border-[#C0C0C0] rounded-md px-3 py-2 bg-transparent"
            >
              <option value="USER">User</option>
              <option value="DOCTOR">Doctor</option>
            </select>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="flex gap-2">
              <InputField
                label="First Name"
                placeholder="Ali"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                borderColor="border-[#C0C0C0]"
                bgColor="transparent"
              />
              <InputField
                label="Last Name"
                placeholder="Ahmed"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                borderColor="border-[#C0C0C0]"
                bgColor="transparent"
              />
            </div>

            <InputField
              label="Email Address"
              placeholder="Email Address"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              borderColor="border-[#C0C0C0]"
              bgColor="transparent"
            />

            <div className="flex gap-2">
              <div className="w-1/3">
                <label className="block text-sm mb-1">Code</label>
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="w-full border border-[#C0C0C0] rounded-md px-3 py-2 bg-transparent"
                >
                  <option value="+880">+880 (BD)</option>
                  <option value="+91">+91 (IN)</option>
                  <option value="+971">+971 (AE)</option>
                  <option value="+1">+1 (US)</option>
                </select>
              </div>
              <InputField
                label="Phone Number"
                placeholder="01711111111"
                type="tel"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                borderColor="border-[#C0C0C0]"
                bgColor="transparent"
              />
            </div>

            <div className="flex gap-2">
              <InputField
                label="Password"
                placeholder="Password"
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                borderColor="border-[#C0C0C0]"
                bgColor="transparent"
              />
              <InputField
                label="Confirm Password"
                placeholder="Type Again"
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                borderColor="border-[#C0C0C0]"
                bgColor="transparent"
              />
            </div>

            {role === "DOCTOR" && (
              <InputField
                label="BMDC Number"
                placeholder="BMDC-98765"
                name="bmdcNumber"
                required
                value={formData.bmdcNumber}
                onChange={handleChange}
                borderColor="border-[#C0C0C0]"
                bgColor="transparent"
              />
            )}

            <label className="flex items-center text-sm gap-2 mt-2">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                required
                className="accent-teal-600"
              />
              <p className="text-[#616060]">I agree to the</p>
              <a className="text-[#2B6F71]" href="#">
                Terms of Use
              </a>
              &
              <a className="text-[#2B6F71]" href="#">
                Privacy Policy
              </a>
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#06688E] text-white py-2 rounded-full transition cursor-pointer disabled:opacity-60"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="mt-4 text-sm text-[#616060]">
            Or Sign Up Via Social Network
          </div>
          <div className="flex space-x-1 mt-6">
            <div className="bg-[#E22F31] text-white h-[40px] w-[40px] rounded flex items-center justify-center">
              <GoogleIcon />
            </div>
            <div className="bg-black text-white h-[40px] w-[40px] rounded flex items-center justify-center">
              <GithubIcon />
            </div>
            <div className="bg-[#4676ED] text-white h-[40px] w-[40px] rounded flex items-center justify-center">
              <FacebookIcon />
            </div>
            <button className="bg-[#0A66C2] text-white h-[40px] w-[40px] rounded flex items-center justify-center">
              <LinkedinIcon />
            </button>
          </div>

          <div className="text-center text-[16px] text-[#AAAAAA] mt-[80px]">
            © 2022, Smart Care - Design by Doctor
          </div>
        </div>
      </div>
    </div>
  );
}
