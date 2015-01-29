var iosKeychain = {
    put: function(key, value, onSuccess, onError) {
        cordova.exec(
                 key, 
                 value,
                 function(data){onSuccess(data)},
                 function(err){onError(err)},
                 'Keychain', 'put', [ 'empty' ]);
    },

    get: function(key, onSuccess, onError) {
        cordova.exec(
                 key,
                 function(data){onSuccess(data)},
                 function(err){onError(err)},
                 'Keychain', 'get', [ 'empty' ]);
    },
};
