function Calculator() {
    this.res = 0;
    this.init = (n) =>  {
        this.res = n
        return this
    };
    this.add = (n) =>  {
        this.res += n;
        return this
    };
    this.mul = (n) => {
        this.res *= n;
        return this
    };
    this.div = (n) => {
        this.res /= n;
        return this
    };
    this.sub = (n) => {
        this.res -= n;
        return this
    };
    this.alert = () => {
        setTimeout(() => alert(this.res), 6000)
        return this
    };
}