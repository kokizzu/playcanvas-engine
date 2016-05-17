float getShadowVSMVS(sampler2D shadowMap, vec3 shadowParams) {
    dShadowCoord = vMainShadowUv.xyz;
    dShadowCoord.z += shadowParams.z;
    dShadowCoord.xyz /= vMainShadowUv.w;
    dShadowCoord.z = min(dShadowCoord.z, 1.0);

    return VSM(shadowMap, dShadowCoord.xy, shadowParams.x, dShadowCoord.z);
}

