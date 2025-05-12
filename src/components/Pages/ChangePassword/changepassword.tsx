"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <Form
      name="change-password"
      layout="vertical" // Sets labels on top of inputs
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Current Password"
        name="currentPassword"
        rules={[{ message: "Please input your current password!" }]}
      >
        <Input
          type={showPassword ? "text" : "password"}
          size="large"
          placeholder="Enter Password"
          prefix={<FaLock className="text-[#48B1DB]" />}
          suffix={
            showPassword ? (
              <FaRegEye className="text-[#48B1DB]" onClick={togglePasswordVisibility} />
            ) : (
              <FaRegEyeSlash className="text-[#48B1DB]" onClick={togglePasswordVisibility} />
            )
          }
          className="bg-transparent border border-black px-3 py-2 rounded-md"
        />
      </Form.Item>

      <Form.Item
        label="New Password"
        name="newPassword"
        rules={[{ message: "Please input your new password!" }]}
      >
        <Input
         size="large"
          type={showPassword ? "text" : "password"}
          placeholder="Enter New Password"
          prefix={<FaLock className="text-[#48B1DB]" />}
          suffix={
            showPassword ? (
              <FaRegEye className="text-[#48B1DB]" onClick={togglePasswordVisibility} />
            ) : (
              <FaRegEyeSlash className="text-[#48B1DB]" onClick={togglePasswordVisibility} />
            )
          }
          className="bg-transparent border border-black px-3 py-2 rounded-md"
        />
      </Form.Item>

      <Form.Item
        label="Confirm New Password"
        name="confirmPassword"
        rules={[
          { message: "Please confirm your new password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Passwords do not match!"));
            },
          }),
        ]}
      >
        <Input
         size="large"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm New Password"
          prefix={<FaLock className="text-[#48B1DB]" />}
          suffix={
            showConfirmPassword ? (
              <FaRegEye className="text-[#48B1DB]" onClick={toggleConfirmPasswordVisibility} />
            ) : (
              <FaRegEyeSlash className="text-[#48B1DB]" onClick={toggleConfirmPasswordVisibility} />
            )
          }
          className="bg-transparent border border-black px-3 py-2 rounded-md"
        />
      </Form.Item>

      <Form.Item className="flex justify-end items-center">
        <Button size="large" className="bg-[#48B1DB] text-white" htmlType="submit">
          Save Change
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ChangePassword;
