/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Builder.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Builder',

    stores: [
    	'ExportLoad'
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});


/*

TODO:

- remove feature.active
- remove emtry
- add account id,name,code

 */