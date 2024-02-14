import mongoose from "mongoose";
mongoose.connect("mongodb+srv://BashDeen:Berrybash419@cluster0.tcy5skl.mongodb.net/");
import Blog from './model/Blog.js';
// Create a new blog post and insert into database
const article = await Blog.create({
title: 'Awesome Post!',
slug: 'awesome-post',
published: true,
content: 'This is the best post ever',
tags: ['featured', 'announcement'],
});
console.log(article);

article.title = "The Most Awesomest Post!!";
await article.save();
console.log(article);