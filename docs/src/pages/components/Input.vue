<template>
  <page-content page-title="Components - Input">
    <docs-component>
      <div slot="description">
        <p>Inputs allow users to input text and usually appear in forms. Users may enter text, numbers, or mixed-format types of input.</p>
      </div>

      <div slot="api">
        <api-table>
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>v-model</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>A required model object to bind the value.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>label</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Sets the label.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>required</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Apply the required rule to style the label with an "*". Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Disable the input and prevent its actions. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>autofocus</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Autofocus the input. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>placeholder</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Sets the placeholder.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>maxlength</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Sets the maxlength and enable the text counter.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-clearable</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Show a button to clear the input. Default <code>false</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-input-invalid</md-table-cell>
                <md-table-cell>Set the error class</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="events">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Value</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>input</md-table-cell>
                <md-table-cell>Receives the value of the model</md-table-cell>
                <md-table-cell>Triggered when the field value input.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>change</md-table-cell>
                <md-table-cell>Receives the value</md-table-cell>
                <md-table-cell>Triggered when the field value change.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="slots">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>before</md-table-cell>
                <md-table-cell>Adds the content before the text field. Optional.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>after</md-table-cell>
                <md-table-cell>Adds the content after the text field. Optional.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-input">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>type</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Sets the type. Default <code>text</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Regular fields">
          <div slot="demo">
            <form novalidate @submit.stop.prevent="submit">
              <md-input
                label="Initial value"
                v-model="initialValue"
              />

              <md-input
                label="With label"
                placeholder="My nice placeholder"
              />

              <md-input
                placeholder="Only placeholder"
              />

              <md-input
                label="Number"
                type="number"
              />

              <md-textarea
                label="Textarea"
              />

              <md-input
                disabled
                label="Disabled"
              />

              <md-input
                md-clearable
                label="Clearable"
                v-model="initialValue"
              />
            </form>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;form novalidate @submit.stop.prevent=&quot;submit&quot;&gt;
                &lt;md-input-container&gt;
                  &lt;label&gt;Initial value&lt;/label&gt;
                  &lt;md-input v-model=&quot;initialValue&quot;&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container&gt;
                  &lt;label&gt;With label&lt;/label&gt;
                  &lt;md-input placeholder=&quot;My nice placeholder&quot;&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container md-inline&gt;
                  &lt;label&gt;Inline field&lt;/label&gt;
                  &lt;md-input&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container&gt;
                  &lt;label&gt;Number&lt;/label&gt;
                  &lt;md-input type=&quot;number&quot;&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container&gt;
                  &lt;label&gt;Textarea&lt;/label&gt;
                  &lt;md-textarea&gt;&lt;/md-textarea&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container&gt;
                  &lt;label&gt;Disabled&lt;/label&gt;
                  &lt;md-input disabled&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container md-clearable&gt;
                  &lt;label&gt;Clearable&lt;/label&gt;
                  &lt;md-input v-model=&quot;initialValue&quot;&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;
              &lt;/form&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                data() {
                  return {
                    initialValue: &apos;My initial value&apos;
                  };
                }
              };
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Passwords">
          <div slot="demo">
            <form novalidate @submit.stop.prevent="submit">
              <md-input
                type="password"
                label="Input Password"
              />
            </form>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;form novalidate @submit.stop.prevent=&quot;submit&quot;&gt;
                &lt;md-input-container&gt;
                  &lt;label&gt;Regular Password&lt;/label&gt;
                  &lt;md-input type=&quot;password&quot;&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container md-has-password&gt;
                  &lt;label&gt;Password Reveal&lt;/label&gt;
                  &lt;md-input type=&quot;password&quot;&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;
              &lt;/form&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Icons">
          <div slot="demo">
            <form novalidate @submit.stop.prevent="submit">
              <md-input
                type="number"
                label="Money"
              >
                <md-icon slot="before" class="md-warn">
                  warning
                  <md-tooltip>Be careful. You're almost broken!</md-tooltip>
                </md-icon>
                <md-icon slot="after">attach_money</md-icon>
              </md-input>

              <md-input
                type="tel"
                label="Phone"
              >
                <md-icon slot="before">phone</md-icon>
              </md-input>

              <md-textarea
                label="Notes"
              >
                <md-icon slot="before">speaker_notes</md-icon>
              </md-textarea>
            </form>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;form novalidate @submit.stop.prevent=&quot;submit&quot;&gt;
                &lt;md-input-container&gt;
                  &lt;md-icon class=&quot;md-warn&quot;&gt;
                    warning
                    &lt;md-tooltip&gt;Be careful. You&#039;re almost broken!&lt;/md-tooltip&gt;
                  &lt;/md-icon&gt;
                  &lt;label&gt;Money&lt;/label&gt;
                  &lt;md-input type=&quot;text&quot;&gt;&lt;/md-input&gt;
                  &lt;md-icon&gt;attach_money&lt;/md-icon&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container&gt;
                  &lt;md-icon&gt;phone&lt;/md-icon&gt;
                  &lt;label&gt;Phone&lt;/label&gt;
                  &lt;md-input type=&quot;tel&quot;&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container&gt;
                  &lt;md-icon&gt;speaker_notes&lt;/md-icon&gt;
                  &lt;label&gt;Notes&lt;/label&gt;
                  &lt;md-textarea&gt;&lt;/md-textarea&gt;
                &lt;/md-input-container&gt;
              &lt;/form&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Required and Errors">
          <div slot="demo">
            <form novalidate @submit.stop.prevent="submit">
              <md-input
                required
                label="Required"
              />

              <md-input
                required
                label="Error"
                class="md-input-invalid"
              />

              <md-input
                required
                label="Error with message"
                class="md-input-invalid"
              >
                <span class="md-error">Validation message</span>
              </md-input>

              <md-textarea
                required
                label="Textarea with message"
                class="md-input-invalid"
              >
                <span class="md-error">Textarea validation message</span>
              </md-textarea>
            </form>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;form novalidate @submit.stop.prevent=&quot;submit&quot;&gt;
                &lt;md-input-container&gt;
                  &lt;label&gt;Required&lt;/label&gt;
                  &lt;md-input required&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container class=&quot;md-input-invalid&quot;&gt;
                  &lt;label&gt;Error&lt;/label&gt;
                  &lt;md-input required&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container class=&quot;md-input-invalid&quot;&gt;
                  &lt;label&gt;Error with message&lt;/label&gt;
                  &lt;md-input required&gt;&lt;/md-input&gt;

                  &lt;span class=&quot;md-error&quot;&gt;Validation message&lt;/span&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container class=&quot;md-input-invalid&quot;&gt;
                  &lt;label&gt;Textarea with error&lt;/label&gt;
                  &lt;md-textarea&gt;&lt;/md-textarea&gt;

                  &lt;span class=&quot;md-error&quot;&gt;Textarea validation message&lt;/span&gt;
                &lt;/md-input-container&gt;
              &lt;/form&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Character counter">
          <div slot="demo">
            <form novalidate @submit.stop.prevent="submit">
              <md-textarea
                label="Textarea"
                maxlength="70"
              />

              <md-input
                label="Input"
                maxlength="20"
              />
            </form>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;form novalidate @submit.stop.prevent=&quot;submit&quot;&gt;
                &lt;md-input-container&gt;
                  &lt;label&gt;Textarea&lt;/label&gt;
                  &lt;md-textarea maxlength=&quot;70&quot;&gt;&lt;/md-textarea&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container&gt;
                  &lt;label&gt;Input&lt;/label&gt;
                  &lt;md-input maxlength=&quot;20&quot;&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;
              &lt;/form&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div slot="demo">
            <form novalidate @submit.stop.prevent="submit">
              <md-input
                label="Green - Input"
                md-theme="green"
              />

              <md-textarea
                label="Red - Textarea"
                md-theme="red"
              />
            </form>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;form novalidate @submit.stop.prevent=&quot;submit&quot;&gt;
                &lt;md-input-container md-theme=&quot;green&quot;&gt;
                  &lt;label&gt;Green - Input&lt;/label&gt;
                  &lt;md-input&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;

                &lt;md-input-container md-theme=&quot;red&quot;&gt;
                  &lt;label&gt;Red - Textarea&lt;/label&gt;
                  &lt;md-textarea&gt;&lt;/md-textarea&gt;
                &lt;/md-input-container&gt;
              &lt;/form&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>

</style>

<script>
  export default {
    data() {
      return {
        initialValue: 'My initial value'
      };
    }
  };
</script>
