const sep = (context, name, test) => {
    console.log("---------------------------------")
    console.log("---- " + context + " -- " + name + " ----")
    console.log("---------------------------------")

    if (test) test();
}

export default sep;