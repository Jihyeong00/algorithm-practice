function solution(my_string) {
    return [...new Set(my_string.split(''))].join('');
}