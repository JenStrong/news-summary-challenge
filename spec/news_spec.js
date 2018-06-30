(function() {
    var note = new NoteModel("test 1");
    assert.isTrue("The note has been created", note.read() === "test 1");
})();
