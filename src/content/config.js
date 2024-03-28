/*
 * @Author: lufy321 1689688912@qq.com
 * @Date: 2024-03-28 22:14:47
 * @LastEditors: lufy321 1689688912@qq.com
 * @LastEditTime: 2024-03-28 22:26:07
 * @FilePath: \test\src\content\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
    defineCollection,
    z
} from "astro:content";

const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        author: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }).optional,
        tags: z.array(z.string())
    })
})

export const collections = {
    'posts': postsCollection
}