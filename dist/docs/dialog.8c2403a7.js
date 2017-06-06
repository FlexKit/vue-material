webpackJsonp([11],{484:function(e,t,l){l(612);var o=l(0)(l(515),l(577),"data-v-4835b5ba",null);e.exports=o.exports},515:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{alert:{content:"Your post has been deleted!",ok:"Cool!"},alert2:{title:"Post created!",contentHtml:"Your post <strong>Material Design is awesome</strong> has been created."},confirm:{title:"Use Google's location service?",contentHtml:"Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running.",ok:"Agree",cancel:"Disagree"},prompt:{title:"What's your name?",ok:"Done",cancel:"Cancel",id:"name",name:"name",placeholder:"Type your name...",maxlength:30,value:""}}},methods:{openDialog:function(e){this.$refs[e].open()},closeDialog:function(e){this.$refs[e].close()},onOpen:function(){console.log("Opened")},onClose:function(e){console.log("Closed",e)}}},e.exports=t.default},543:function(e,t,l){t=e.exports=l(3)(),t.push([e.i,".dialog-fab[data-v-4835b5ba]{height:200px}",""])},577:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("page-content",{attrs:{"page-title":"Components - Dialog"}},[l("docs-component",[l("div",{slot:"description"},[l("p",[e._v("Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.")]),e._v(" "),l("p",[e._v("The dialog component works with any plain html content. You can have tabs, all form components and more.")]),e._v(" "),l("p",[e._v("Alternativelly you can use three presets to build Alerts, Confirms and Prompt dialogs.")]),e._v(" "),l("p",[e._v("The preset component is created on top of "),l("code",[e._v("<md-dialog>")]),e._v(". You should provide the content or the HTML content at least.")]),e._v(" "),l("p",[e._v("All the pressets can use the same options and events from the "),l("code",[e._v("<md-dialog>")]),e._v(" component.")])]),e._v(" "),l("div",{slot:"api"},[l("api-table",{attrs:{name:"md-dialog"}},[l("md-table",{slot:"properties"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Type")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("md-click-outside-to-close")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Enable or disable click outside to close. Default: "),l("code",[e._v("true")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-esc-to-close")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Enable or disable close on esc key. Default: "),l("code",[e._v("true")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-backdrop")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Create an opaque backdrop behind the dialog. Default: "),l("code",[e._v("true")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-open-from")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("The query selector of the element that is used to determine from which the Dialog will open.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-close-to")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("The query selector of the element that is used to determine from which the Dialog will close.")])],1)],1)],1),e._v(" "),l("md-table",{slot:"events"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Value")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("open")]),e._v(" "),l("md-table-cell",[e._v("Receive the state of the dialog: "),l("code",[e._v("ok")]),e._v("| "),l("code",[e._v("cancel")]),e._v(" "),l("br"),e._v("Works only for Confirm and Prompt")]),e._v(" "),l("md-table-cell",[e._v("Triggered when the dialog open.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("close")]),e._v(" "),l("md-table-cell",[e._v("Receive the state of the dialog: "),l("code",[e._v("ok")]),e._v("| "),l("code",[e._v("cancel")]),e._v(" "),l("br"),e._v("Works only for Confirm and Prompt")]),e._v(" "),l("md-table-cell",[e._v("Triggered when the dialog closes.")])],1)],1)],1),e._v(" "),l("md-table",{slot:"methods"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("open")]),e._v(" "),l("md-table-cell",[e._v("Open the dialog.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("close")]),e._v(" "),l("md-table-cell",[e._v("Close the dialog.")])],1)],1)],1)],1),e._v(" "),l("api-table",{attrs:{name:"md-dialog-title"}},[l("p",[e._v("Can display a title on the top of the Dialog.")]),e._v(" "),l("p",[e._v("No options available")])]),e._v(" "),l("api-table",{attrs:{name:"md-dialog-content"}},[l("p",[e._v("Used to display rich content inside the Dialog.")]),e._v(" "),l("p",[e._v("No options available")])]),e._v(" "),l("api-table",{attrs:{name:"md-dialog-actions"}},[l("p",[e._v("Hold the actions of a dialog and align them on the right. Here you can add "),l("code",[e._v("<md-button>")]),e._v(" with or without icons.")]),e._v(" "),l("p",[e._v("No options available")])]),e._v(" "),l("api-table",{attrs:{name:"md-dialog-alert"}},[l("div",{slot:"properties"},[l("md-table",[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Type")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("md-title")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Sets the alert title. Optional.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-content")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Sets the alert content.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-content-html")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Sets the alert content with a custom html.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-ok-text")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v('Sets the alert "Okay" button text.')])],1)],1)],1)],1)]),e._v(" "),l("api-table",{attrs:{name:"md-dialog-confirm"}},[l("div",{slot:"properties"},[l("md-table",[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Type")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("md-title")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Sets the confirm title. Optional.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-content")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Sets the confirm content.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-content-html")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Sets the confirm content with a custom html.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-ok-text")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v('Sets the confirm "Okay" button text.')])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-cancel-text")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v('Sets the confirm "Cancel" button text.')])],1)],1)],1)],1)]),e._v(" "),l("api-table",{attrs:{name:"md-dialog-prompt"}},[l("div",{slot:"properties"},[l("md-table",[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Type")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("md-title")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Sets the prompt title. Optional.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-content")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Sets the prompt content.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-content-html")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Sets the prompt content with a custom html.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-ok-text")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v('Sets the prompt "Okay" button text.')])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-cancel-text")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v('Sets the prompt "Cancel" button text.')])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("v-model")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("A required model object to be bind when the value is confirmed.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-input-id")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Set the ID of the field inside the prompt dialog.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-input-name")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Set the name of the field inside the prompt dialog.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-input-maxlength")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Set the optional maxlength of the field inside the prompt dialog with the text count.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-input-placeholder")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Set the optional placeholder of the field inside the prompt dialog.")])],1)],1)],1)],1)])],1),e._v(" "),l("div",{slot:"example"},[l("example-box",{attrs:{"card-title":"Custom"}},[l("div",{staticClass:"dialog-fab",slot:"demo"},[l("md-dialog",{ref:"dialog1",attrs:{"md-open-from":"#custom","md-close-to":"#custom"}},[l("md-dialog-title",[e._v("Lorem ipsum dolor sit amet")]),e._v(" "),l("md-dialog-content",[e._v("Nemo, nobis necessitatibus ut illo, ducimus ex.")]),e._v(" "),l("md-dialog-actions",[l("md-button",{staticClass:"md-primary",nativeOn:{click:function(t){e.closeDialog("dialog1")}}},[e._v("Cancel")]),e._v(" "),l("md-button",{staticClass:"md-primary",nativeOn:{click:function(t){e.closeDialog("dialog1")}}},[e._v("Ok")])],1)],1),e._v(" "),l("md-dialog",{ref:"dialog2",attrs:{"md-open-from":"#fab","md-close-to":"#fab"}},[l("md-dialog-title",[e._v("Create new note")]),e._v(" "),l("md-dialog-content",[l("form",[l("md-textarea",{attrs:{label:"Note"}})],1)]),e._v(" "),l("md-dialog-actions",[l("md-button",{staticClass:"md-primary",nativeOn:{click:function(t){e.closeDialog("dialog2")}}},[e._v("Cancel")]),e._v(" "),l("md-button",{staticClass:"md-primary",nativeOn:{click:function(t){e.closeDialog("dialog2")}}},[e._v("Create")])],1)],1),e._v(" "),l("md-button",{staticClass:"md-primary md-raised",attrs:{id:"custom"},nativeOn:{click:function(t){e.openDialog("dialog1")}}},[e._v("Custom")]),e._v(" "),l("md-button",{staticClass:"md-fab md-fab-bottom-right",attrs:{id:"fab"},nativeOn:{click:function(t){e.openDialog("dialog2")}}},[l("md-icon",[e._v("add")])],1)],1),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1">\n              <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>\n\n              <md-dialog-content>Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>\n\n              <md-dialog-actions>\n                <md-button class="md-primary" @click.native="closeDialog(\'dialog1\')">Cancel</md-button>\n                <md-button class="md-primary" @click.native="closeDialog(\'dialog1\')">Ok</md-button>\n              </md-dialog-actions>\n            </md-dialog>\n\n            <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">\n              <md-dialog-title>Create new note</md-dialog-title>\n\n              <md-dialog-content>\n                <form>\n                  <md-input-container>\n                    <label>Note</label>\n                    <md-textarea></md-textarea>\n                  </md-input-container>\n                </form>\n              </md-dialog-content>\n\n              <md-dialog-actions>\n                <md-button class="md-primary" @click.native="closeDialog(\'dialog2\')">Cancel</md-button>\n                <md-button class="md-primary" @click.native="closeDialog(\'dialog2\')">Create</md-button>\n              </md-dialog-actions>\n            </md-dialog>\n\n            <md-button class="md-primary md-raised" id="custom" @click.native="openDialog(\'dialog1\')">Custom</md-button>\n            <md-button class="md-fab md-fab-bottom-right" id="fab" @click.native="openDialog(\'dialog2\')">\n              <md-icon>add</md-icon>\n            </md-button>\n          ')]),e._v(" "),l("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              methods: {\n                openDialog(ref) {\n                  this.$refs[ref].open();\n                },\n                closeDialog(ref) {\n                  this.$refs[ref].close();\n                },\n                onOpen() {\n                  console.log('Opened');\n                },\n                onClose(type) {\n                  console.log('Closed', type);\n                }\n              }\n            };\n          ")])],1)]),e._v(" "),l("example-box",{attrs:{"card-title":"Alerts"}},[l("div",{slot:"demo"},[l("md-dialog-alert",{ref:"dialog3",attrs:{"md-content":e.alert.content,"md-ok-text":e.alert.ok},on:{open:e.onOpen,close:e.onClose}}),e._v(" "),l("md-dialog-alert",{ref:"dialog4",attrs:{"md-title":e.alert2.title,"md-content-html":e.alert2.contentHtml},on:{open:e.onOpen,close:e.onClose}}),e._v(" "),l("md-button",{staticClass:"md-primary md-raised",nativeOn:{click:function(t){e.openDialog("dialog3")}}},[e._v("Alert")]),e._v(" "),l("md-button",{staticClass:"md-primary md-raised",nativeOn:{click:function(t){e.openDialog("dialog4")}}},[e._v("Alert with HTML")])],1),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-dialog-alert\n              :md-content="alert.content"\n              :md-ok-text="alert.ok"\n              @open="onOpen"\n              @close="onClose"\n              ref="dialog3">\n            </md-dialog-alert>\n\n            <md-dialog-alert\n              :md-title="alert2.title"\n              :md-content-html="alert2.contentHtml"\n              @open="onOpen"\n              @close="onClose"\n              ref="dialog4">\n            </md-dialog-alert>\n\n            <md-button class="md-primary md-raised" @click.native="openDialog(\'dialog3\')">Alert</md-button>\n            <md-button class="md-primary md-raised" @click.native="openDialog(\'dialog4\')">Alert with HTML</md-button>\n          ')]),e._v(" "),l("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                alert: {\n                  content: 'Your post has been deleted!',\n                  ok: 'Cool!'\n                },\n                alert2: {\n                  title: 'Post created!',\n                  contentHtml: 'Your post <strong>Material Design is awesome</strong> has been created.'\n                }\n              }),\n              methods: {\n                openDialog(ref) {\n                  this.$refs[ref].open();\n                },\n                closeDialog(ref) {\n                  this.$refs[ref].close();\n                },\n                onOpen() {\n                  console.log('Opened');\n                },\n                onClose(type) {\n                  console.log('Closed', type);\n                }\n              }\n            };\n          ")])],1)]),e._v(" "),l("example-box",{attrs:{"card-title":"Confirm"}},[l("div",{slot:"demo"},[l("md-dialog-confirm",{ref:"dialog5",attrs:{"md-title":e.confirm.title,"md-content-html":e.confirm.contentHtml,"md-ok-text":e.confirm.ok,"md-cancel-text":e.confirm.cancel},on:{open:e.onOpen,close:e.onClose}}),e._v(" "),l("md-button",{staticClass:"md-primary md-raised",nativeOn:{click:function(t){e.openDialog("dialog5")}}},[e._v("Confirm")])],1),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-dialog-confirm\n              :md-title="confirm.title"\n              :md-content-html="confirm.contentHtml"\n              :md-ok-text="confirm.ok"\n              :md-cancel-text="confirm.cancel"\n              @open="onOpen"\n              @close="onClose"\n              ref="dialog5">\n            </md-dialog-confirm>\n\n            <md-button class="md-primary md-raised" @click.native="openDialog(\'dialog5\')">Confirm</md-button>\n          ')]),e._v(" "),l("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                confirm: {\n                  title: 'Use Google\\'s location service?',\n                  contentHtml: 'Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running.',\n                  ok: 'Agree',\n                  cancel: 'Disagree'\n                }\n              }),\n              methods: {\n                openDialog(ref) {\n                  this.$refs[ref].open();\n                },\n                closeDialog(ref) {\n                  this.$refs[ref].close();\n                },\n                onOpen() {\n                  console.log('Opened');\n                },\n                onClose(type) {\n                  console.log('Closed', type);\n                }\n              }\n            };\n          ")])],1)]),e._v(" "),l("example-box",{attrs:{"card-title":"Prompt"}},[l("div",{slot:"demo"},[l("md-dialog-prompt",{ref:"dialog6",attrs:{"md-title":e.prompt.title,"md-ok-text":e.prompt.ok,"md-cancel-text":e.prompt.cancel,"md-input-id":e.prompt.id,"md-input-name":e.prompt.name,"md-input-maxlength":e.prompt.maxlength,"md-input-placeholder":e.prompt.placeholder},on:{open:e.onOpen,close:e.onClose},model:{value:e.prompt.value,callback:function(t){e.prompt.value=t},expression:"prompt.value"}}),e._v(" "),l("md-button",{staticClass:"md-primary md-raised",nativeOn:{click:function(t){e.openDialog("dialog6")}}},[e._v("Prompt")])],1),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-dialog-prompt\n              :md-title="prompt.title"\n              :md-ok-text="prompt.ok"\n              :md-cancel-text="prompt.cancel"\n              @open="onOpen"\n              @close="onClose"\n              v-model="prompt.value"\n              ref="dialog6">\n            </md-dialog-prompt>\n\n            <md-button class="md-primary md-raised" @click.native="openDialog(\'dialog6\')">Prompt</md-button>\n          ')]),e._v(" "),l("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                prompt: {\n                  title: 'What\\'s your name?',\n                  ok: 'Done',\n                  cancel: 'Cancel',\n                  id: 'name',\n                  name: 'name',\n                  placeholder: 'Type your name...',\n                  maxlength: 30,\n                  value: ''\n                }\n              }),\n              methods: {\n                openDialog(ref) {\n                  this.$refs[ref].open();\n                },\n                closeDialog(ref) {\n                  this.$refs[ref].close();\n                },\n                onOpen() {\n                  console.log('Opened');\n                },\n                onClose(type) {\n                  console.log('Closed', type);\n                }\n              }\n            };\n          ")])],1)])],1)])],1)},staticRenderFns:[]}},612:function(e,t,l){var o=l(543);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);l(4)("86a03136",o,!0)}});