/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { Table, notification, Skeleton, Button, Form, Input } from "antd";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import map from "lodash/map";
import capitalize from "lodash/capitalize";
import lowerCase from "lodash/lowerCase";
import replace from "lodash/replace";
import includes from "lodash/includes";
import { rolesListAction, rolesAddAction } from "../../containers/Roles/reducers/rolesListReducer";
import { createRole, getRoles } from "../../api/roles";

import { openNotificationSuccess } from "../../utils";


const Roles = () => {
  const dispatch = useDispatch();

  const rolesList = useSelector((state) => state.rolesList.value);
  const [isLoadingRoles, setIsLoadingRoles] = useState(false);
  const [dataRol, setDataRol] = useState(rolesList);

  const [api] = notification.useNotification();

  useEffect(() => {
    getRoles(
      setIsLoadingRoles,
      setDataRol,
      openNotificationSuccess,
      dispatch,
      rolesListAction,
      api
    );
  }, [api, dispatch]);

  let entity;
  let allEntity = [];
  const permissions = [
    "WRITE",
    "READ_ACCESS",
    "READ",
    "DELETE"
  ]

  dataRol.map(o => {
    const permissions = o.permissions;
    permissions.map(currentPerm => {
      entity = currentPerm.split(":");
      if (!allEntity.includes(entity[0])) {
        allEntity = allEntity.concat(entity[0])
      }
    })
  })

  const columnsNew = [{
    title: "Roles",
    dataIndex: "name",
    key: "name",
    width: 100,
    fixed: "left",
  }];


  let column;
  let dataIndex = [];
  allEntity.map(entity => {
    let children = [];
    const valueEntity = capitalize(entity)
    permissions.map(permission => {
      const valuePerm = capitalize(permission)
      const newValue = valuePerm.replace("_", " ")
      dataIndex = dataIndex.concat(valueEntity.concat(valuePerm))
      children = children.concat({
        title: newValue,
        dataIndex: valueEntity.concat(valuePerm),
      })
    })
    column = {
      title: valueEntity,
      children,

    }
    return columnsNew.push(column);
  })

  const dataTable = [];
  dataRol.map(o => {
    const permissions = o.permissions;
    let value = {};
    value["name"] = o.name
    const transformPermissions = permissions.map(value => {
      const valuePerm = lowerCase(value);
      return valuePerm.replace(/\s/g, '');
    })
    dataIndex.map(data => {
      const newData = lowerCase(data);
      const compare = includes(transformPermissions, newData.replace(/\s/g, ''));
      if (compare) {
        value[data] = "x";
      } else {
        value[data] = " ";
      }
    })
    dataTable.push(value)
  })


  const onFinish = (value) => {
    let permissionsResult = [];
    allEntity.map(entity => {
      permissions.map(permission => {
        if(permission.includes("READ")){
          permissionsResult.push(`${entity}:${permission}`)
        }
      })
    })
    const data = {
      id: uuidv4(),
      name: value.role,
      permissions: permissionsResult,
    }
    createRole(data, dispatch, rolesAddAction);
    dataTable.push(data)
    setDataRol([...dataRol, data]);
  };

  const renderAddRole = () => (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
      layout="inline"
    >
      <Form.Item
        name="role"
        rules={[
          {
            required: true,
            message: 'Nuevo rol',
          },
        ]}
      >
        <Input placeholder="role" disabled={false} />
      </Form.Item>
      <Form.Item>
        <Button loading={false} type="primary" htmlType="submit">
          Adicionar
        </Button>
      </Form.Item>
    </Form>

  )


  return (
    <>
      <h1 className="title-section" data-testid="general-info-roles">Gestion de roless</h1>
      {!isLoadingRoles ? (
        <Table
          columns={columnsNew}
          dataSource={dataTable}
          bordered
          size="middle"
          scroll={{
            x: "calc(700px + 50%)",
            y: 400,
          }}
          footer={renderAddRole}
        />
      ) : (
        <Skeleton />
      )}
    </>
  );
};
export default Roles;
