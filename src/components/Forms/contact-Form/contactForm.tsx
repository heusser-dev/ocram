import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (): void => {
    // Aquí puedes enviar los datos del formulario a tu servidor o hacer cualquier otra cosa con ellos
    console.log(formData);
  
    // Crear el enlace de WhatsApp con los datos del formulario
    const whatsappLink = `https://api.whatsapp.com/send?phone=56977669354&text=Hola%20mi%20nombre%20es%20${formData.name}%20mi%20email%20es%20${formData.email}%20y%20te%20escribo%20para%20${formData.message}`;
  
    // Abrir el enlace en una nueva pestaña
    window.open(whatsappLink);
  
    // Limpia el formulario después de enviar
    form.resetFields();
  };

  return (
    <div className='dark:bg-white dark:bg-opacity-90  bg-custom-blue bg-opacity-90 md:w-8/12  mx-auto rounded-md '>
    <Form form={form} onFinish={handleSubmit} className='p-6 animate-blurred-fade-in '       layout={"vertical"}>
      <Form.Item label="Nombre" name="name" rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}>
        <Input name="name" value={formData.name} onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Correo electrónico" name="email" rules={[{ required: true, message: 'Por favor ingrese su correo electrónico' }]}>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Mensaje" name="message" rules={[{ required: true, message: 'Por favor ingrese su mensaje' }]}>
        <Input.TextArea name="message" value={formData.message} onChange={handleChange} />
      </Form.Item>
      <Form.Item className='text-center'> {/* Agrega la clase 'text-center' para centrar horizontalmente el botón */}
              <Button type="default" htmlType="submit" icon={<SendOutlined />} size='large' className='bg-white dark:text-white dark:bg-custom-blue dark:bg-opacity-80 mx-auto w-10/12 b-2 hover:scale-105 transform transition-transform duration-300'>
          Enviar
        </Button>
      </Form.Item>
    </Form>
  </div>
  );
};

export default ContactForm;
