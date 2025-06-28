/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Button, Form, Input } from 'antd';
import { useEffect, useRef, useState, ChangeEvent } from 'react';
import { IoChevronBack, IoCameraOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Image from 'next/image';
import { useGetUserQuery, useUpdateUserMutation } from '@/redux/features/Profile/Profile';

const EditSellerProfile: React.FC = () => {
  const { data, refetch } = useGetUserQuery({});
  const user = data?.attributes?.user;

  const [form] = Form.useForm();
  const router = useRouter();

  const [updateProfileInfo, { isLoading }] = useUpdateUserMutation();

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(
    user?.image ? `${process.env.NEXT_PUBLIC_BASE_URL}/${user.image}` : null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        firstName: user.name || '',
        phoneNumber: user.phone || '',
        address: user.address || '',
      });
    }
  }, [user, form]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setImageFile(file);
      setImageUrl(newImageUrl);
    }
  };

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const onFinish = async (values: any) => {
    const formData = new FormData();
    formData.append('name', values.firstName);
    formData.append('phone', values.phoneNumber);
    formData.append('address', values.address);

    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      const response = await updateProfileInfo(formData);
      if ('data' in response && response.data) {
        toast.success('Profile updated successfully!');
        router.push('/sellerProfile');
        refetch();
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Something went wrong while updating your profile.');
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center my-6">
          <button onClick={() => router.push('/sellerProfile')}>
            <IoChevronBack className="text-xl" />
          </button>
          <h1 className="text-2xl font-semibold ml-2">Edit Information</h1>
        </div>
      </div>

      {/* Profile Form */}
      <div className="w-full md:w-[95%] lg:w-[50%] p-7 px-14 rounded-md bg-[#E5F6FD] h-full md:mt-1 mx-auto mb-5">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="w-full space-y-6 mt-5"
        >
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <div onClick={handleDivClick} className="cursor-pointer relative">
              {imageUrl ? (
                <div className="relative w-[130px] h-[130px] rounded-full overflow-hidden border">
                  <Image
                    src={imageUrl}
                    alt="Profile Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="border rounded-3xl p-5 text-white bg-gray-300">
                  <IoCameraOutline size={60} />
                </div>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>

          {/* Edit Form */}
          <Form.Item label="User Name" name="firstName">
            <Input
              className="w-full rounded-lg px-5 py-2 bg-white outline-none"
              placeholder="Enter your name"
            />
          </Form.Item>

          <Form.Item label="Phone Number" name="phoneNumber">
            <Input
              className="w-full rounded-lg px-5 py-2 bg-white outline-none"
              placeholder="Enter your phone number"
            />
          </Form.Item>

          <Form.Item label="Address" name="address">
            <Input
              className="w-full rounded-lg px-5 py-2 bg-white outline-none"
              placeholder="Enter your address"
            />
          </Form.Item>

          <div className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="px-5 py-3"
            >
              Update Information
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditSellerProfile;
