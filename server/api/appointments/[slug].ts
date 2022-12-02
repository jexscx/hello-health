import data from '../data.json';

/** Returns the appointment that matches the slug param */
export default defineEventHandler((event) => {
    const slug = event.context.params.slug;
    const result = data.appointments.find(ap => ap.slug === slug);
    if(!result) {
        event.node.res.statusCode = 404;
        event.node.res.statusMessage = `No appointment found for slug ${slug}`; 
        return event.node.res.end();
    }
    return result;
})