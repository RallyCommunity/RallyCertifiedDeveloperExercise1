Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{
        html:'<a href="https://help.rallydev.com/apps/2.0rc1/doc/#!/api/Rally.data.WsapiDataStore">Hint!<a>'
    },
    fireFromTheStore:function(){
      Ext.Msg.alert('Status', 'Store Loaded with records.');
    },

    launch: function() {
    }
});
