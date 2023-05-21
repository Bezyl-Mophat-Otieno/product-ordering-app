import { NextResponse } from 'next/server'
import Product from '@/models/Product'
import dbConnect from '@/utils/mongo'

//find all products
export async function GET (request){
    try {
        await dbConnect()
        const products = await Product.find()
        return NextResponse.json(products)
    
    } catch (error) {

        return NextResponse.json(error.message)
        
    }

}



export async function POST (request){

    try {

        await dbConnect()
        const requestData = await request.json();
        const product = await Product.create(requestData);
        return NextResponse.json(product);
        
    } catch (error) {
        return NextResponse.json(error.message)
    }

}
