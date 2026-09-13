#pragma once

#include <stdint.h>

#if defined(_WIN32)
#define PKMN_EXPORT __declspec(dllexport)
#else
#define PKMN_EXPORT __attribute__((visibility("default")))
#endif

#ifdef __cplusplus
extern "C" {
#endif

/** Returns the C ABI version implemented by this library. */
PKMN_EXPORT uint32_t pkmn_abi_version(void);

#ifdef __cplusplus
}
#endif
