/*
Heading Block
*/
SirTrevor.Locales.en.blocks.ext_heading = {
  title: "Введите заголовок",
  tag_type: "Tag type"
}

SirTrevor.Blocks.ExtHeading = (function(){
  var template = _.template([
    '<div class="title-info"><%= i18n.t("blocks:ext_heading:title") %></div>',
    '<h1 class="st-required st-text-block st-text-block--heading" contenteditable="true"></h1>',
    '<label class="st-input-label"> <%= i18n.t("blocks:ext_heading:tag_type") %></label>',
    '<select id="type" class="st-input-string st-required js-permalink-input"',
    '   onchange="SirTrevor.Blocks.ExtHeading.changeTag(this);"',
    '>',
    ' <option value="h1">H1</option>',
    ' <option value="h2">H2</option>',
    '</select>'
  ].join("\n"));
  // '<input maxlength="140" name="type" placeholder="<%= i18n.t("blocks:ext_heading:tag_type") %>"',

  return SirTrevor.Block.extend({
    type: 'ExtHeading',

    title: function(){return i18n.t("blocks:ext_heading:title"); },

    editorHTML: function() {
      return template(this);
    },

    icon_name: 'heading',

    loadData: function(data){
      this.getTextBlock().html(SirTrevor.toHTML(data.text, this.type));
    },

    changeTag: function(obj) {
      console.log(obj);
    }
  });
})();