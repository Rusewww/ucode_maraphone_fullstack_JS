let houseMixin = {
    wordEncrypt() {
        let index = x => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(x);
        this.description = this.description.split('').map(x => index(x) > -1 ? 'zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA'[index(x)] : x).join('');
    },
    wordDecrypt() {
        let index = x => 'zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA'.indexOf(x);
        this.description = this.description.split('').map(x => index(x) > -1 ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'[index(x)] : x).join('');
    },
    wordReplace(str1, str2) {
        this.description = this.description.replace(str1, str2);
    },
    wordInsertAfter(str1, str2) {
        this.description = [this.description.slice(0, this.description.indexOf(str1) + str1.length), " ", str2, this.description.slice(this.description.indexOf(str1) + str1.length)].join('');
    },
    wordDelete(str) {
        this.description = [this.description.slice(0, this.description.indexOf(str)), this.description.slice(this.description.indexOf(str) + str.length)].join('');
    }
}
