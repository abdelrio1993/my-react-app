// NOTIFICATIONS
export const openNotificationSuccess = (api, placement, message, description) => {
    api.success({
        message,
        description,
        placement,
    });
};

export const openNotificationError = (api, placement, message, status) => {
    api.error({
        message: `${status}`,
        description: message,
        placement,
    });
};

// CONFIRM
export const showDeleteConfirm = (confirm, icon, id) => {
    confirm({
        title: `Delete the Roles ${id}.`,
        icon: icon,
        content: 'This Roles will be permanently deleted',
        okText: 'Si',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
            console.log('Delete');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
};
