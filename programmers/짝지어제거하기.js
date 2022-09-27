function solution(s)
{
    return s.split("").reduce((pre,cal) => {
        if(pre.length === 0) return [cal];
        const last = pre.pop();
        if(last === cal) return pre;
        pre.push(last,cal);
        return pre;
    }, []).length === 0 ? 1 : 0
}
