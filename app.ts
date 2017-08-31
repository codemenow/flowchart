class App {
    actionBindings(): void {
        var that = this;
        $('.create-box').click(function(){
            that.onCreateBox();
        });
        $('.create-circle').click(function(){
            that.onCreateCircle();
        });
        $('.create-line').click(function(){
            that.onCreateLine();
        });
        $('.clear-app').click(function(){
            that.onClearApp();
        });
    }
    elNamingBinding(id: string): void {
        $('#'+id).dblclick(function(e) {
            this.classList.remove('hide-input');
            this.classList.add('show-input');
            $('#' + id).find('input').focus();
        });
    }
    onClearApp(): void {
        $('.app').html('');
    }
    createID(): string {
        return Math.random().toString(36).substring(2);
    }
    onCreateBox(): any {
        let id = this.createID();
        $('.app').append('<div id="'+id+'" class="el el-box hide-input"><input type="text" name="text"></div>');
        this.makeDraggable(id);
        this.elNamingBinding(id);
        return this;
    }
    onCreateCircle(): any {
        let id = this.createID();
        $('.app').append('<div id="'+id+'" class="el el-circle hide-input"><input type="text" name="text"></div>');
        this.makeDraggable(id);
        this.elNamingBinding(id);
        return this;
    }
    onCreateLine(): any {
        let id = this.createID();
        $('.app').append('<div id="'+id+'" class="el el-line hide-input"><input type="text" name="text"></div>');
        this.makeDraggable(id);
        this.elNamingBinding(id);
        return this;
    }
    createDiamond(): any {
        let id = this.createID();
        $('.app').append('<div id="'+id+'" class="el el-diamond hide-input"><input type="text" name="text"></div>');
        this.makeDraggable(id);
        this.elNamingBinding(id);
        return this;
    }
    makeDraggable(id: string): void {
        let $el = $('#'+ id);
        $el.draggable();
        $el.resizable();
    }
}

$(document).ready(function () {
    let app = new App();
    app.actionBindings();
});
