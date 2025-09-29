const quine = () => {
    console.log(`const quine = ${quine.toString()};\nquine();`);
};
quine();