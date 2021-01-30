
let testMassive=()=>{
    let massive=[]
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            for (let z = 0; z < 3; z++) {
                for (let c = 0; c < 3; c++) {
                    let rowSlide = {
                        one: x*2,
                        two: y*2,
                        three: z*2,
                        four: c*2
                    }
                   massive.push(rowSlide)

                }
            }
        }
    }
    return massive
}
export default testMassive
