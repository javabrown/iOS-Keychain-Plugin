# iOS-Keychain-Plugin
Keychain is password management system in OS X developed by Apple.

This plugin store, retrieve and remove the key value pair of data such as credentials in a key-value pair.

:warning: Report issues on the [Apache Cordova issue tracker](https://issues.apache.org/jira/browse/CB-9966)


##iOS keychain internal design 
![](https://raw.githubusercontent.com/javabrown/iOS-Keychain-Plugin/master/example/icons/keychain-design.png "iOS keychain internal design ")

## Installation

    // npm hosted (new) id
    cordova plugin add cordova-plugin-splashscreen

    // you may also install directly from this repo 
    cordova plugin add https://github.com/javabrown/iOS-Keychain-Plugin.git
    
## Supported Platforms

- iOS


#### config.xml

-  __keychain__ (string). The resource name which is used to store, retrieve and remove the key value pair of data.

## Methods

- keychain.put
- keychain.get

## keychain.put

Store secure entry for a key in keychain.

    navigator.keychain.put('key', 'secure-value', success, error);

## keychain.get

Retrieve stored entry from the keychain.

    navigator.keychain.get('key', success, error);


Your application cannot call `navigator.keychain.get(..) or put(..)` until the app has
started and the `deviceready` event has fired.
