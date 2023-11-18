import React from 'react';
import { Result } from 'antd';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Recurso no encontrado."
      extra={
        <Link to={'/'}> Ir al inicio</Link>
      }
    />
  );
};

export default Page404;
