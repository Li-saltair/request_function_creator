let a = {
    uploadPicture: function(data){ return request.request_post({serve:serverConfig.FILE,url:api.file.uploadPicture,data})},
    uploadVideo: function(data){ return request.request_post({serve:serverConfig.FILE,url:api.file.uploadVideo,data})},
    uploadAvatar: function(data){ return request.request_post({serve:serverConfig.FILE,url:api.file.uploadAvatar,data})},
    uploadRealNameAuthentication: function(data){ return request.request_post({serve:serverConfig.FILE,url:api.file.uploadRealNameAuthentication,data})},
    uploadFile: function(data){ return request.request_post({serve:serverConfig.FILE,url:api.file.uploadFile,data})},
    uploadVideoAndPoster: function(data){ return request.request_post({serve:serverConfig.FILE,url:api.file.uploadVideoAndPoster,data})},
    uploadPictureUri: function(data){ return request.request_post({serve:serverConfig.FILE,url:api.file.uploadPictureUri,data})},
    uploadMultiplePicture: function(data){ return request.request_post({serve:serverConfig.FILE,url:api.file.uploadMultiplePicture,data})},
    editAdvertising: function(data){ return request.request_post({serve:serverConfig.PCLOGIC,url:api.pclogic.editAdvertising,data})},
    addAdvertising: function(data){ return request.request_post({serve:serverConfig.PCLOGIC,url:api.pclogic.addAdvertising,data})},
    filterAdvertising: function(data){ return request.request_post({serve:serverConfig.PCLOGIC,url:api.pclogic.filterAdvertising,data})},
    onlineAdvertising: function(data){ return request.request_post({serve:serverConfig.PCLOGIC,url:api.pclogic.onlineAdvertising,data})},
    deleteAdvertising: function(data){ return request.request_post({serve:serverConfig.PCLOGIC,url:api.pclogic.deleteAdvertising,data})},
    updateAdvertisingPicture: function(data){ return request.request_post({serve:serverConfig.PCLOGIC,url:api.pclogic.updateAdvertisingPicture,data})},
    offlineAdvertising: function(data){ return request.request_post({serve:serverConfig.PCLOGIC,url:api.pclogic.offlineAdvertising,data})},
    getAdvertisingList: function(data){ return request.request_get({serve:serverConfig.PCLOGIC,url:api.pclogic.getAdvertisingList,data})}
}