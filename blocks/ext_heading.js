/*
Heading Block
*/
SirTrevor.Locales.en.blocks.ext_heading = {
  title: "Введите заголовок",
  tag_type: "Tag type"
};

SirTrevor.Blocks.ExtHeading = (function(){
  var template = _.template([
    '<div class="title-info"><%= i18n.t("blocks:ext_heading:title") %></div>',
    '<h1 class="st-required st-text-block st-text-block--heading" contenteditable="true"></h1>',
    '<label class="st-input-label"> <%= i18n.t("blocks:ext_heading:tag_type") %></label>',
    '<select id="tag_type" class="st-input-string st-required js-tag_type-input">',
    ' <option value="h1">H1</option>',
    ' <option value="h2">H2</option>',
    ' <option value="h3">H3</option>',
    ' <option value="h4">H4</option>',
    ' <option value="h5">H5</option>',
    ' <option value="h6">H6</option>',
    '</select>'
  ].join("\n"));

  return SirTrevor.Block.extend({
    type: 'ext_heading',

    title: function(){
      return i18n.t("blocks:ext_heading:title");
    },

    editorHTML: function() {
      return template(this);
    },

    icon_name: 'heading',

    loadData: function(data){
      this.getTextBlock().html(SirTrevor.toHTML(data.text, this.type));
      this.$('.js-tag_type-input').val(data.tag_type);
    },

    onBlockRender: function() {
      this.$("select").on("change", this.onTagChange);
    },

    onTagChange: function(evt) {
      var sel = evt.target;
      var new_el = $("<" + evt.currentTarget.value + ">");
      var old_el = $(sel).parent().find(".st-text-block--heading");

      _.each(old_el.get(0).attributes, function(attrib) {
        new_el.attr(attrib.name, attrib.value);
      });

      new_el.html(old_el.html());
      old_el.replaceWith(new_el);
    }
  });
})();