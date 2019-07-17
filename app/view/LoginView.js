/*
 * File: app/view/LoginView.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('app.view.LoginView', {
    extend: 'Ext.Container',
    alias: 'widget.loginview',

    requires: [
        'Ext.Container',
        'Ext.Img',
        'Ext.field.Password',
        'Ext.field.Select',
        'Ext.Button'
    ],

    config: {
        cls: 'login_view_bg',
        id: 'loginView',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [
            {
                xtype:'label',
                html:'<span style="font-size: 34px;color: blue;">首钢PES系统</span>',
                margin: '0 0 20 0'
            },
            {
                xtype: 'fieldset',
                width:300,
                title: '用户登录',
                items: [
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'image',
                                height: 20,
                                width: 20,
                                src: 'resources/images/username_icon.png'
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'userName'
                                //,value:'tltest'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'image',
                                height: 20,
                                width: 20,
                                src: 'resources/images/password_icon.png'
                            },
                            {
                                xtype: 'passwordfield',
                                itemId: 'passWord'
                                //,value:'123abc'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'image',
                                height: 20,
                                width: 20,
                                src: 'resources/images/time.png'
                            },
                            {
                                xtype: 'selectfield',
                                options: [
                                    {
                                        text: '白班',
                                        value: 'first'
                                    },
                                    {
                                        text: '中班',
                                        value: 'second'
                                    },
                                    {
                                        text: '晚班',
                                        value: 'third'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'image',
                                height: 20,
                                width: 20,
                                src: 'resources/images/classes.png'
                            },
                            {
                                xtype: 'selectfield',
                                itemId: 'crewSelect',
                                options: [
                                    {
                                        text: '甲班',
                                        value: '1'
                                    },
                                    {
                                        text: '乙班',
                                        value: '2'
                                    },
                                    {
                                        text: '丙班',
                                        value: '3'
                                    },
                                    {
                                        text: '丁班',
                                        value: '4'
                                    }
                                ],
                                usePicker: false
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'loginButton',
                text: ' 登 录 系 统'
            },
            {
                xtype: 'container',
                docked:'bottom',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype:'label',
                        html:'<span style="font-size: 12px;color: white;"><center>©Copyright&nbsp;&nbsp;北京首钢自动化信息技术有限公司信息事业部&nbsp;&nbsp;</center></span>'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onLoginButtonTap',
                event: 'tap',
                delegate: '#loginButton'
            }
        ]
    },

    decodeJSON : function(text) {
        var result = Ext.JSON.decode(text, true);
        if (!result) {
            result = {};
            result.meta = {};
            result.meta.success = false;
            result.meta.msg = text;
        }
        return result;
    },

    onLoginButtonTap: function(button, e, eOpts) {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            fullscreen:true,
            message: '请稍候......'
        });

        /*var menuView = Ext.create('app.view.MenuView');
        var root = Ext.getCmp('rootView');
        var nemuStore = Ext.getStore('MenuDataViewStore');
        nemuStore.removeAll();
        nemuStore.add({'image':'resources/images/hd_icon.png',
            'label':'辅材入库','RES_ID':'SL-MOBILE-00'});
        nemuStore.add({'image':'resources/images/ck_icon.png',
            'label':'辅材出库','RES_ID':'SL-MOBILE-01'});
        nemuStore.add({'image':'resources/images/rc_icon.png',
            'label':'辅材转库','RES_ID':'SL-MOBILE-02'});
        nemuStore.add({'image':'resources/images/hd_icon.png',
            'label':'锌锭入库','RES_ID':'SL-MOBILE-05'});
        nemuStore.add({'image':'resources/images/ck_icon.png',
            'label':'锌锭出库','RES_ID':'SL-MOBILE-03'});
        nemuStore.add({'image':'resources/images/rc_icon.png',
            'label':'锌锭转库','RES_ID':'SL-MOBILE-04'});
        //nemuStore.add({'image':'resources/images/pd_icon.png',
        //    'label':'二维码生成','RES_ID':'SL-MOBILE-08'});
        root.push(menuView);
        Ext.Viewport.setMasked(false);
        return;*/

        var me = this;
        var loginView = button.up('#loginView');
        var userName = loginView.down('#userName').getValue();
        var passWord = loginView.down('#passWord').getValue();
        var crewId = loginView.down('#crewSelect').getValue();
        if (userName==''){
            Ext.Viewport.setMasked(false);
            Ext.Msg.alert('错误','用户名不能为空！');
        }else if(passWord==''){
            Ext.Viewport.setMasked(false);
            Ext.Msg.alert('错误','密码不能为空！');
        }else{
            Ext.Ajax.request({
                url:rootUrl+'/ac/login/mobileLogin.action',
                params: {
                    username: userName,
                    password: passWord
                },
                success: function(conn, response, options, eOpts) {
                    var result = me.decodeJSON(conn.responseText);
                    if (result.meta.success) {
                        Ext.Ajax.request({
                            url: rootUrl + '/mat/stock-record/findAppVersion.action',
                            params: {
                                version: rootVersion
                            },
                            success: function(conn, response, options, eOpts) {
                                var result = me.decodeJSON(conn.responseText);
                                if (result.meta.success) {
                                    var menuView = Ext.create('app.view.MenuView');
                                    var root = Ext.getCmp('rootView');
                                    var nemuStore = Ext.getStore('MenuDataViewStore');
                                    nemuStore.removeAll();
                                    nemuStore.add({'image':'resources/images/hd_icon.png', 'label':'辅材入库','RES_ID':'SL-MOBILE-00'});
                                    nemuStore.add({'image':'resources/images/ck_icon.png', 'label':'辅材出库','RES_ID':'SL-MOBILE-01'});
                                    nemuStore.add({'image':'resources/images/rc_icon.png', 'label':'辅材转库','RES_ID':'SL-MOBILE-02'});
                                    nemuStore.add({'image':'resources/images/hd_icon.png', 'label':'锌锭入库','RES_ID':'SL-MOBILE-05'});
                                    nemuStore.add({'image':'resources/images/ck_icon.png', 'label':'锌锭出库','RES_ID':'SL-MOBILE-03'});
                                    nemuStore.add({'image':'resources/images/rc_icon.png', 'label':'锌锭转库','RES_ID':'SL-MOBILE-04'});
                                    //获取用户组织信息
                                    Ext.Ajax.request({
                                        url: rootUrl + '/combo/combo/findComboBoxValue.action',
                                        params: {
                                            tableName:'VIEW_MD_ORG_STRUCTURE_INFO',
                                            displayField:'COST_CENTER_DESC',
                                            valueField:'COST_CENTER_CODE',
                                            orderField:'COST_ORDER',
                                            keyword:'DISTINCT',
                                            authField:'tlglCost',
                                            authTable:'COST_CENTER_CODE'
                                        },
                                        success: function(conn, response, options, eOpts) {
                                            Ext.Viewport.setMasked(false);
                                            var result = me.decodeJSON(conn.responseText);
                                            if (result && result.items && result.items.length > 0) {
                                                var costStore = Ext.getStore('CostDataViewStore');
                                                costStore.setData(result.items);
                                                root.push(menuView);
                                            } else {
                                                //返回失败
                                                Ext.Msg.alert("提示","成本中心信息获取失败！");
                                            }
                                        },
                                        failure: function(conn, response, options, eOpts) {
                                            Ext.Viewport.setMasked(false);
                                            Ext.Msg.alert("提示","网络异常，请重新登录.");
                                        }
                                    });
                                }else{
                                    Ext.Viewport.setMasked(false);
                                    Ext.Msg.alert('提示', result.meta.message);
                                }
                            },
                            failure: function(conn, response, options, eOpts) {
                                Ext.Viewport.setMasked(false);
                                Ext.Msg.alert("提示","网络异常，请重新登录！");
                            }
                        })
                    } else {
                        //登陆失败
                        Ext.Viewport.setMasked(false);
                        Ext.Msg.alert("登录失败","请检查您的用户名和密码！");
                    }
                },
                failure: function(conn, response, options, eOpts) {
                    Ext.Viewport.setMasked(false);
                    Ext.Msg.alert('错误信息','网络异常，请重新登录.');
                }
            });
        }
    }
});