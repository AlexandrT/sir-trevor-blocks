SirTrevor.Locales.en.blocks.editing = {
  title: "Editor",
  tag_type: "Tag type"
};

SirTrevor.Blocks.Editing = (function(){
  var template = _.template([
    '<script src="vendor/ckeditor/ckeditor.js"></script>',
    '<form>',
    '<textarea name="editor1" id="editor1" rows="10" cols="80">',
    'Амиго, напиши что-нибудь :(.',
    '</textarea>',
    '<script>',
    'CKEDITOR.replace("editor1");',
    '</script>',
    '</form>'
  ].join("\n"));

  return SirTrevor.Block.extend({
    type: 'editing',

    title: function(){
      return i18n.t("blocks:editing:title");
    },

    editorHTML: function() {
      return template(this);
    },

    icon_name: 'image',

    loadData: function(data){
      this.getTextBlock().html(SirTrevor.toHTML(data.text, this.type));
    }
  });
})();