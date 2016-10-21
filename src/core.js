import { Conditional,
    Field,
    FieldSet,
    RenderContent,
    RenderTemplate,
    Form,
    NewChildContext,
    Dom,
    PropTypes,
    css,
    eventable,
    loaderFactory,
    tutils,
    validators,
    warning,
    injectorFactory,
    stringInjector,
    cachedInjector,
    newSubschemaContext
} from 'subschema/core';
import ValueManager from './ReduxValueManager';

export {
    Conditional,
    Field,
    FieldSet,
    RenderContent,
    RenderTemplate,
    Form,
    NewChildContext,
    Dom,
    PropTypes,
    ValueManager,
    css,
    eventable,
    loaderFactory,
    tutils,
    validators,
    warning,
    injectorFactory,
    stringInjector,
    cachedInjector,
    newSubschemaContext
};
export default {
    Conditional,
    Field,
    FieldSet,
    RenderContent,
    RenderTemplate,
    Form,
    NewChildContext,
    Dom,
    PropTypes,
    ValueManager,
    css,
    eventable,
    cachedInjector,
    injectorFactory,
    loaderFactory,
    tutils,
    validators,
    warning,
    newSubschemaContext
}


/**
 * Used to initialize new subschema for testing.  But also to override behaviours if necessary.
 *
 * @param defaultLoaders
 * @param defaultResolvers
 * @param defaultPropTypes
 * @param defaultInjectorFactory
 * @param Subschema
 */

function newSubschemaContext(defaultLoaders = [], defaultResolvers = {}, defaultPropTypes = PropTypes, defaultInjectorFactory = injectorFactory, Subschema = {
    Conditional,
    Field,
    FieldSet,
    RenderContent,
    RenderTemplate,
    Form,
    NewChildContext,
    Dom,
    PropTypes,
    ValueManager,
    css,
    eventable,
    loaderFactory,
    tutils,
    validators,
    warning,
    injectorFactory,
    cachedInjector,
    stringInjector

}) {
    const {loader, injector,  ...rest} = Subschema;


    const _injector = defaultInjectorFactory();
    for (let key of Object.keys(defaultResolvers)) {
        if (key in defaultPropTypes) {
            _injector.resolver(defaultPropTypes[key], defaultResolvers[key]);
        }
    }
    const defaultLoader = loaderFactory(defaultLoaders);
    const defaultInjector = cachedInjector(stringInjector(_injector, defaultPropTypes));

    //Form needs these to kick off the whole thing.  Its defaults can be overriden with
    // properties.
    rest.Form.defaultProps.loader = defaultLoader;
    rest.Form.defaultProps.injector = defaultInjector;
    rest.loader = defaultLoader;
    rest.injector = defaultInjector;

    return rest;

}
